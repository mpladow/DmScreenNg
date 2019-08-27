import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CharacterCard } from 'src/app/_models/charactercard.model';
import { CharacterQuickaddComponent } from '../character-quickadd/character-quickadd.component';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-encounter-initiative-dialog',
  templateUrl: './encounter-initiative-dialog.component.html',
  styleUrls: ['./encounter-initiative-dialog.component.scss']
})
export class EncounterInitiativeDialogComponent implements OnInit {

  characterCards = [];
  characterInitiativeForm: FormGroup;


  constructor(public dialogRef: MatDialogRef<EncounterInitiativeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
  }


  ngOnInit() {
    this.characterCards = this.data['dataKey'];
    console.log(this.characterCards);
    // create form
    this.characterInitiativeForm = this.fb.group({
    });
   // create the dynamic form
    this.characterCards.forEach((card) => this.characterInitiativeForm
      .addControl(card.Name, new FormControl()));
  }

  onCancelClick() {
    this.dialogRef.close();
  }


}

