import { Injectable, ViewChild } from '@angular/core';
import { CreatureCard } from "../_models/creaturecard.model";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { SessionService } from './session.service';

@Injectable({
  providedIn: "root"
})
export class CreatureCardService {
  creatureCards: CreatureCard[] = [];
  @ViewChild("autosize", { static: false }) autosize: CdkTextareaAutosize;
  constructor(private sessionService: SessionService) { }

  getCreatureCardsFromSession(){
    this.creatureCards = this.sessionService.getCreatureCardsList();
  }
  getCreatureCards() {
    // if local storage has a value, then populate this array wiht the local storage value
    this.creatureCards = this.sessionService.getCreatureCardsList();
    return this.creatureCards;
  }
  addCreatureCard(creature: CreatureCard) {
    //add this card to the database, if requested
    //add this to the session.
    this.creatureCards.push(creature);
    this.sessionService.updateAllCreatureCards(this.creatureCards);
  }

  removeCharacterCard(creature: CreatureCard) {
    this.creatureCards = this.creatureCards.filter(obj => {
      return obj.Name !== creature.Name;
    });
    this.sessionService.updateAllCreatureCards(this.creatureCards);
  }
  updateCharacterCard(creatureToUpDate: CreatureCard) {
    const index = this.creatureCards.findIndex(
      obj => obj.Name == creatureToUpDate.Name
    );
    // update the array, currently can only update notes
    this.creatureCards[index].Notes = creatureToUpDate.Notes;
    this.sessionService.updateAllCreatureCards(this.creatureCards);
  }
  updateInitiativeValues(charactersToUpdate) {
    let creatureArray = [];
    for (var name in charactersToUpdate) {
      creatureArray.push({ Name: name, Initiative: charactersToUpdate[name]
      });
    }
    creatureArray.forEach(c => {
      //consider changing this to ID in the future
      const index = this.creatureCards.findIndex(obj => obj.Name == c.Name);
      this.creatureCards[index].Initiative = c.Initiative;
    });
    this.sortByInitiative();
    this.sessionService.updateAllCreatureCards(this.creatureCards);
  }

  loadcreatureCardsFromDb() {
    // not yet implemented
  }
  sortByInitiative() {
    this.creatureCards.sort((a, b) => (a.Initiative > b.Initiative ? -1 : 1));
  }
}
