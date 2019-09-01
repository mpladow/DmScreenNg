import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CharacterCard } from 'src/app/_models/charactercard.model';
import { CharacterQuickaddComponent } from '../character-quickadd/character-quickadd.component';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, FormGroupName } from '@angular/forms';
import { CharactercardService } from 'src/app/_services/charactercard.service';

@Component({
  selector: 'app-encounter-initiative-dialog',
  templateUrl: './encounter-initiative-dialog.component.html',
  styleUrls: ['./encounter-initiative-dialog.component.scss']
})
export class EncounterInitiativeDialogComponent implements OnInit {

  characterCards: CharacterCard[] = [];
  characterInitiativeForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EncounterInitiativeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private characterCardService: CharactercardService) {
  }

  get charactersArray() {
    return this.characterInitiativeForm.get('characters') as FormArray;
  }

  ngOnInit() {
    let group = {};
    this.characterCards = this.data['dataKey'];
    this.characterCards.forEach(card =>
      group[card.Name] = new FormControl(card.Initiative)
    );
    this.characterInitiativeForm = new FormGroup(group);
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmitClick() {
    console.log(this.characterInitiativeForm.value)
    this.characterCardService.updateInitiativeValues(this.characterInitiativeForm.value);
    this.dialogRef.close();

    // add the initiative value to each of the characterCards

    // return to the controller that called the event to continue the sorting.
  }

}

