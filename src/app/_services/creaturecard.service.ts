import { Injectable, ViewChild,EventEmitter } from '@angular/core';
import { CreatureCard } from "../_models/creaturecard.model";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CreatureCardService {
  creatureCards: CreatureCard[] = [];
  creatureAdded: EventEmitter<CreatureCard> = new EventEmitter();
  baseUrl = environment.apiUrl + '/creaturecards';

  @ViewChild("autosize", { static: false }) autosize: CdkTextareaAutosize;
  constructor(private sessionService: SessionService, private http: HttpClient) { }

  getCreatureCardsFromSession() {
    this.creatureCards = this.sessionService.getCreatureCardsList();
  }
  getCreatureCards() {
    // if local storage has a value, then populate this array wiht the local storage value
    this.creatureCards = this.sessionService.getCreatureCardsList();
    return this.creatureCards;
  }
  addCreatureCard(creature: CreatureCard) {
    return this.http.post<CreatureCard>(this.baseUrl + '/edit', creature).subscribe(newCreature => {
      var c: CreatureCard = newCreature;
      this.creatureCards.push(c);
      this.sessionService.updateAllCreatureCards(this.creatureCards);
      this.creatureAdded.emit(c);
    });
  }
getCreatureAddedEmitter(){
  return this.creatureAdded;
}
  removeCharacterCard(creature: CreatureCard) {
    this.creatureCards = this.creatureCards.filter(obj => {
      return obj.creatureCardId !== creature.creatureCardId;
    });
    this.sessionService.updateAllCreatureCards(this.creatureCards);
  }
  updateCharacterCard(creatureToUpDate: CreatureCard) {
    const index = this.creatureCards.findIndex(
      obj => obj.creatureCardId == creatureToUpDate.creatureCardId
    );
    // update the array, currently can only update notes
    this.creatureCards[index].notes = creatureToUpDate.notes;
    this.sessionService.updateAllCreatureCards(this.creatureCards);
  }
  updateInitiativeValues(charactersToUpdate) {
    let creatureArray = [];
    for (var name in charactersToUpdate) {
      creatureArray.push({
        name: name, initiative: charactersToUpdate[name]
      });
    }
    creatureArray.forEach(c => {
      //consider changing this to ID in the future
      const index = this.creatureCards.findIndex(obj => obj.name == c.name);
      this.creatureCards[index].initiative = c.initiative;
    });
    this.sortByInitiative();
    this.sessionService.updateAllCreatureCards(this.creatureCards);
  }

  loadcreatureCardsFromDb() {
    // not yet implemented
  }
  sortByInitiative() {
    this.creatureCards.sort((a, b) => (a.initiative > b.initiative ? -1 : 1));
  }
}
