import { Injectable, ViewChild } from '@angular/core';
import { CharacterCard } from '../_models/charactercard.model';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
  providedIn: 'root'
})
export class CharactercardService {

  characterCards: CharacterCard[] = [];
  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize
  constructor() { }

  getCharacterCards() {
    // if local storage has a value, then populate this array wiht the local storage value
    const characterCardStorage = localStorage.getItem('characterCards');
    if (characterCardStorage != undefined) {
      this.characterCards = JSON.parse(characterCardStorage);
    }
    return this.characterCards;
  }
  addCharacterCard(character: CharacterCard) {
    // find the highest id of the previous
    this.characterCards.push(character);
    localStorage.setItem('characterCards', JSON.stringify(this.characterCards));

  }
  removeCharacterCard(character: CharacterCard) {
    this.characterCards = this.characterCards.filter((obj) => {
      return obj.Name !== character.Name;
    });
    localStorage.setItem('characterCards', JSON.stringify(this.characterCards));

  }
  updateCharacterCard(characterToUpdate: CharacterCard) {
    const index = this.characterCards.findIndex((obj => obj.Name == characterToUpdate.Name));
    // update the array
    this.characterCards[index].Notes = characterToUpdate.Notes;
    localStorage.setItem('characterCards', JSON.stringify(this.characterCards));
  }
  updateInitiativeValues(charactersToUpdate) {
    let characterArray = [];
    for (var name in charactersToUpdate) {
      characterArray.push({Name: name, Initiative: charactersToUpdate[name] })
    }
    console.log(characterArray)
    characterArray.forEach(c => {
      //consider changing this to ID in the future
      const index = this.characterCards.findIndex(obj => obj.Name == c.Name);
      this.characterCards[index].Initiative = c.Initiative;
    });
    this.sortByInitiative();
    localStorage.setItem('characterCards', JSON.stringify(this.characterCards));
  }

  loadCharacterCardsFromDb() {
// not yet implemented
  }
  sortByInitiative() {
    this.characterCards.sort((a, b) =>
      (a.Initiative > b.Initiative) ? -1 : 1
    );
  }
}
