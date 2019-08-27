import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CharacterCard } from 'src/app/_models/charactercard.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: CharacterCard;
  @Output() deleted = new EventEmitter<CharacterCard>();
  characterModifyForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }
  onRemoveCreatureClick() {
    this.deleted.emit(this.character);
    console.log('delete clicked');
  }

}
