import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { CharacterService } from 'src/app/_services/character.service';
import { CharacterCard } from 'src/app/_models/charactercard.model';

@Component({
  selector: 'app-character-tracker',
  templateUrl: './character-tracker.component.html',
  styleUrls: ['./character-tracker.component.scss']
})
export class CharacterTrackerComponent implements OnInit {

  characterCards: CharacterCard[] = [
  ];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.generateTestCharacters();
   }
  generateTestCharacters() {
    this.characterCards[0] = {
      CharacterCardId: 0,
      Name: "",
      Level:0,
      AC: 10,
      Initiative:  7,
      HpCurrent: 10,
      HpTotal:  10,
      PPerception:10,
      PInvestigation: 10,
      pInsight:  1,
      Notes: ""
    }



  }
}
