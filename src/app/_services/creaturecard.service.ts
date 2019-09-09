import { Injectable, ViewChild } from '@angular/core';
import { CreatureCard } from "../_models/creaturecard.model";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
  providedIn: "root"
})
export class CreatureCardService {
  creatureCards: CreatureCard[] = [];
  @ViewChild("autosize", { static: false }) autosize: CdkTextareaAutosize;
  constructor() {}

  getCreatureCards() {
    // if local storage has a value, then populate this array wiht the local storage value
    const creatureCardstorage = localStorage.getItem("creatureCards");
    if (creatureCardstorage != undefined) {
      this.creatureCards = JSON.parse(creatureCardstorage);
    }
    return this.creatureCards;
  }
  addCharacterCard(creature: CreatureCard) {
    // find the highest id of the previous
    this.creatureCards.push(creature);
    localStorage.setItem("creatureCards", JSON.stringify(this.creatureCards));
    // set this array to the session service
  }
  removeCharacterCard(creature: CreatureCard) {
    this.creatureCards = this.creatureCards.filter(obj => {
      return obj.Name !== creature.Name;
    });
    localStorage.setItem("creatureCards", JSON.stringify(this.creatureCards));
  }
  updateCharacterCard(characterToUpdate: CreatureCard) {
    const index = this.creatureCards.findIndex(
      obj => obj.Name == characterToUpdate.Name
    );
    // update the array
    this.creatureCards[index].Notes = characterToUpdate.Notes;
    localStorage.setItem("creatureCards", JSON.stringify(this.creatureCards));
  }
  updateInitiativeValues(charactersToUpdate) {
    let characterArray = [];
    for (var name in charactersToUpdate) {
      characterArray.push({ Name: name, Initiative: charactersToUpdate[name] });
    }
    console.log(characterArray);
    characterArray.forEach(c => {
      //consider changing this to ID in the future
      const index = this.creatureCards.findIndex(obj => obj.Name == c.Name);
      this.creatureCards[index].Initiative = c.Initiative;
    });
    this.sortByInitiative();
    localStorage.setItem("creatureCards", JSON.stringify(this.creatureCards));
  }

  loadcreatureCardsFromDb() {
    // not yet implemented
  }
  sortByInitiative() {
    this.creatureCards.sort((a, b) => (a.Initiative > b.Initiative ? -1 : 1));
  }
}
