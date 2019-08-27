import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CharacterCard } from 'src/app/_models/charactercard.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-character-quickadd',
  templateUrl: './character-quickadd.component.html',
  styleUrls: ['./character-quickadd.component.scss']
})
export class CharacterQuickaddComponent implements OnInit {

  private charactercard: CharacterCard;
  characterForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<CharacterQuickaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CharacterCard,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.characterForm = this.fb.group({
      Name: '',
      Level: 0,
      AC: 10,
      MaxHP: 10,
      CurrentHP: 0,
      Initiative: 7,
      PPerception: 10,
      PInvestigation: 10,
      PInsight: 10,
      Notes: "",
      isHostile: false
    })
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onSaveCharacterClick() {
    //add validation
    console.log(this.characterForm.value)
    this.characterForm.controls['CurrentHP'].setValue(this.characterForm.value['MaxHP']);
    this.dialogRef.close(this.characterForm.value);
  }
}
