import { Injectable, ViewChild } from '@angular/core';
import { CharacterCard } from '../_models/charactercard.model';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Injectable({
  providedIn: 'root'
})
export class CharactercardService {

  characterCards: CharacterCard[] = [];
  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize
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
    this.characterCards.push(character);
    localStorage.setItem('characterCards', JSON.stringify(this.characterCards));

  }
  removeCharacterCard(character: CharacterCard) {
    this.characterCards = this.characterCards.filter((obj) => {
      return obj.Name !== character.Name;
    });
    localStorage.setItem('characterCards', JSON.stringify(this.characterCards));

  }
  updateCharacterCard(characterToUpdate) {
    let index = this.characterCards.findIndex((obj => obj.Name == characterToUpdate.Name));
    // update the array
    console.log(index);
    this.characterCards[index].Notes = characterToUpdate.Notes;
    console.log(this.characterCards[index].Notes);
    localStorage.setItem('characterCards', JSON.stringify(this.characterCards));

  }

  loadCharacterCardsFromDb() {

  }
}
