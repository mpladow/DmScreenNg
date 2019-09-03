import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CharacterCard } from 'src/app/_models/charactercard.model';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { CharactercardService } from 'src/app/_services/charactercard.service';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-character-quickadd',
  templateUrl: './character-quickadd.component.html',
  styleUrls: ['./character-quickadd.component.scss']
})
export class CharacterQuickaddComponent implements OnInit {

  isHostile: boolean = false;
  private charactercard: CharacterCard;
  characterForm: FormGroup;
  faPlus = faPlus;
  faTimes = faTimes;


  constructor(public dialogRef: MatDialogRef<CharacterQuickaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CharacterCard,
    private fb: FormBuilder,
    private characterCardService: CharactercardService) { }

  ngOnInit() {
    this.characterForm = this.fb.group({
      Name: new FormControl("Blorgon", [Validators.required]),
      Level: new FormControl(0),
      AC: new FormControl(10),
      MaxHP: new FormControl(10, [Validators.required]),
      CurrentHP: 0,
      Initiative: new FormControl(10, [Validators.required]),
      PPerception: new FormControl(10, [Validators.required]),
      PInvestigation: new FormControl(10, [Validators.required]),
      PInsight: new FormControl(10, [Validators.required]),
      Strength: new FormControl(10, [Validators.required]),
      Dexterity: new FormControl(10, [Validators.required]),
      Constitution: new FormControl(10, [Validators.required]),
      Wisdom: new FormControl(10, [Validators.required]),
      Intelligence: new FormControl(10, [Validators.required]),
      Charisma: new FormControl(10, [Validators.required]),
      Notes: new FormControl(''),
      isHostile: new FormControl(this.isHostile),
      Actions: this.fb.array([
        this.fb.control('')
      ])
    });
  }
  // form getters
  get actions() {
    return this.characterForm.get('Actions') as FormArray;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onSaveCharacterClick() {
    console.log(this.characterForm.value)
    if (this.characterForm.valid) {
      this.characterForm.controls.CurrentHP.setValue(this.characterForm.value.MaxHP);
      this.dialogRef.close(this.characterForm.value);
      this.characterCardService.addCharacterCard(this.characterForm.value);
      console.log(this.characterCardService.getCharacterCards());
    }
    else {
      console.log('invalid')
    }
  }
  addAction(){
this.actions.push(this.fb.control(''));
  }
}
