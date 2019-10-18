import { Injectable, ViewChild, EventEmitter, OnInit, Inject, forwardRef, Injector } from '@angular/core';
import { CreatureCard } from "../_models/creaturecard.model";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class CreatureCardService implements OnInit {
  creatureCards: CreatureCard[] = [];
  creatureAdded: EventEmitter<CreatureCard> = new EventEmitter();
  baseUrl = environment.apiUrl + '/creaturecards';
  _creatureCardsSource = new BehaviorSubject<CreatureCard[]>(this.creatureCards);
  creatureCards$ = this._creatureCardsSource.asObservable();

  @ViewChild("autosize", { static: false }) autosize: CdkTextareaAutosize;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getCreatureCardsFromSession() {
    this._creatureCardsSource.next(this.creatureCards);

  }
  getCreatureCards() {
    // if local storage has a value, then populate this array wiht the local storage value
    return this.creatureCards;
  }
  addCreatureCard(creature: CreatureCard) {
    return this.http.post<CreatureCard>(this.baseUrl + '/edit', creature).subscribe(newCreature => {
      var c: CreatureCard = newCreature;
      this.creatureCards.push(c);
      this.creatureAdded.emit(c);
      this._creatureCardsSource.next(this.creatureCards);
    });
  }
  editCreatureCard(creature: CreatureCard) {
    console.log(creature);
    return this.http.post<CreatureCard>(this.baseUrl + '/edit', creature).subscribe(editedCreature => {
      // find the creature in the array and edit this one.

      this.creatureCards.forEach((cc, i) => {
        if (cc.creatureCardId == editedCreature.creatureCardId)
          this.creatureCards[i] = editedCreature;
      });
      // this.sessionService.updateAllCreatureCards(this.creatureCards);
      this.creatureAdded.emit(editedCreature);
      this._creatureCardsSource.next(this.creatureCards);
    });
  }
  getCreatureAddedEmitter() {
    return this.creatureAdded;
  }
  removeCharacterCard(creature: CreatureCard) {
    this.creatureCards = this.creatureCards.filter(obj => {
      return obj.creatureCardId !== creature.creatureCardId;
    });
    this._creatureCardsSource.next(this.creatureCards);
    // this.sessionService.updateAllCreatureCards(this.creatureCards);
  }
  updateCreatureCardNotes(creatureToUpDate: CreatureCard) {
    const index = this.creatureCards.findIndex(
      obj => obj.creatureCardId == creatureToUpDate.creatureCardId
    );
    // update the array, currently can only update notes
    this.creatureCards[index].notes = creatureToUpDate.notes;
    this._creatureCardsSource.next(this.creatureCards);
    // this.sessionService.updateAllCreatureCards(this.creatureCards);
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
    this._creatureCardsSource.next(this.creatureCards);
    // this.sessionService.updateAllCreatureCards(this.creatureCards);
  }

  loadcreatureCardsFromDb() {
    // not yet implemented
  }
  sortByInitiative() {
    this.creatureCards.sort((a, b) => (a.initiative > b.initiative ? -1 : 1));
  }
}
