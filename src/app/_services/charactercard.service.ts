import { Injectable } from '@angular/core';
import { CharacterCard } from '../_models/charactercard.model';

@Injectable({
  providedIn: 'root'
})
export class CharactercardService {

  characterCards: CharacterCard[] = [];
  constructor() { }

  getCharacterCards(){
    return this.characterCards;
  }
  addCharacterCard(character: CharacterCard) {
    this.characterCards.push(character);
  }
  removeCharacterCard(character: CharacterCard) {
    this.characterCards = this.characterCards.filter((obj) => {
      return obj.Name !== character.Name;
    });
  }

  loadCharacterCardsFromDb() {

  }
}
