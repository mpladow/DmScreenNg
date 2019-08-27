import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CharacterCard } from 'src/app/_models/charactercard.model';
import { FormGroup } from '@angular/forms';
import { CharactercardService } from 'src/app/_services/charactercard.service';


@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit, OnChanges {

  @Input() character: CharacterCard;
  @Output() deleted = new EventEmitter<CharacterCard>();
  characterModifyForm: FormGroup;

  constructor(private characterCardService: CharactercardService) { }

  ngOnInit() {
  }
  onRemoveCreatureClick() {
    this.deleted.emit(this.character);
    console.log('delete clicked');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  onUpdateNotes(e: string) {
    this.character.Notes = e;
    this.characterCardService.updateCharacterCard(this.character);
  }

}
