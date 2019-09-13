import { CreatureCard } from './../../../_models/creaturecard.model';
import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from "@angular/material/dialog";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { CreatureCardService } from "src/app/_services/creaturecard.service";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-character-quickadd",
  templateUrl: "./character-quickadd.component.html",
  styleUrls: ["./character-quickadd.component.scss"]
})
export class CharacterQuickaddComponent implements OnInit {
  isHostile: boolean = false;
  private creatureCards: CreatureCard;
  creatureForm: FormGroup;
  editMode = false;
  // Font Awesome Icons used
  faPlus = faPlus;
  faTimes = faTimes;
  saveToDb = false;

  constructor(
    public dialogRef: MatDialogRef<CharacterQuickaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreatureCard,
    private fb: FormBuilder,
    private creatureCardService: CreatureCardService
  ) { }

  ngOnInit() {
    //get the existing character if editing.
    if (this.editMode) {
      if (this.data["dataKey"] !== null) {
        this.creatureCards = this.data["dataKey"];
        this.creatureForm = this.fb.group({
          Name: new FormControl(this.creatureCards.name, [Validators.required]),
          Level: new FormControl(this.creatureCards['level']),
          AC: new FormControl(this.creatureCards.ac),
          MaxHP: new FormControl(this.creatureCards['maxhp'], [
            Validators.required
          ]),
          CurrentHP: 0,
          Initiative: new FormControl(this.creatureCards['initiative'], [
            Validators.required
          ]),
          PPerception: new FormControl(this.creatureCards['pPerception'], [
            Validators.required
          ]),
          PInvestigation: new FormControl(this.creatureCards['pInvestigation'], [
            Validators.required
          ]),
          PInsight: new FormControl(this.creatureCards['pInsight'], [
            Validators.required
          ]),
          Strength: new FormControl(this.creatureCards['strength'], [
            Validators.required
          ]),
          Dexterity: new FormControl(this.creatureCards['dexterity'], [
            Validators.required
          ]),
          Constitution: new FormControl(this.creatureCards['constitution'], [
            Validators.required
          ]),
          Wisdom: new FormControl(this.creatureCards['wisdom'], [
            Validators.required
          ]),
          Intelligence: new FormControl(this.creatureCards['intelligence'], [
            Validators.required
          ]),
          Charisma: new FormControl(this.creatureCards['charisma'], [
            Validators.required
          ]),
          Notes: new FormControl(this.creatureCards.notes),
          isHostile: new FormControl(this.isHostile),
          Actions: this.setExistingActions(this.creatureCards.actions)
        });
      }
    } else {
      this.creatureForm = this.fb.group({
        Name: new FormControl("", [Validators.required]),
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
        Notes: new FormControl(""),
        isHostile: new FormControl(this.isHostile),
        Actions: this.fb.array([])
      });
    }
  }
  // form getters
  get actions() {
    return this.creatureForm.get("Actions") as FormArray;
  }
  setExistingActions(x) {
    const arr = new FormArray([]);
    if (x !== undefined) {

      x.forEach(y => {
        arr.push(
          this.fb.group({
            Name: y.Name,
            Description: y.Description
          })
        );
      });
    }
    return arr;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onSaveCharacterClick() {
    if (this.creatureForm.valid) {
      this.creatureForm.controls.CurrentHP.setValue(
        this.creatureForm.value.MaxHP
      );
      this.dialogRef.close(this.creatureForm.value);
      this.creatureCardService.addCreatureCard(this.creatureForm.value);
    }
  }
  onSaveToDbClick() { }
  addNewAction(control) {
    control.push(
      this.fb.group({
        Name: [""],
        Description: [""]
      })
    );
    console.log(this.creatureForm.get("actions"));
  }
  deleteAction(control, index) {
    control.removeAt(index);
  }
}
