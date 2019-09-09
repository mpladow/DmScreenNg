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
  characterForm: FormGroup;
  // Font Awesome Icons used
  faPlus = faPlus;
  faTimes = faTimes;
  saveToDb = false;

  constructor(
    public dialogRef: MatDialogRef<CharacterQuickaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreatureCard,
    private fb: FormBuilder,
    private creatureCardService: CreatureCardService
  ) {}

  ngOnInit() {
    //get the existing character if editing.
    if (this.data !== null) {
      if (this.data["dataKey"] !== null) {
        this.creatureCards = this.data["dataKey"];
        this.characterForm = this.fb.group({
          Name: new FormControl(this.creatureCards.Name, [Validators.required]),
          Level: new FormControl(this.creatureCards.Level),
          AC: new FormControl(this.creatureCards.AC),
          MaxHP: new FormControl(this.creatureCards.MaxHP, [
            Validators.required
          ]),
          CurrentHP: 0,
          Initiative: new FormControl(this.creatureCards.Initiative, [
            Validators.required
          ]),
          PPerception: new FormControl(this.creatureCards.PPerception, [
            Validators.required
          ]),
          PInvestigation: new FormControl(this.creatureCards.PInvestigation, [
            Validators.required
          ]),
          PInsight: new FormControl(this.creatureCards.PInsight, [
            Validators.required
          ]),
          Strength: new FormControl(this.creatureCards.Strength, [
            Validators.required
          ]),
          Dexterity: new FormControl(this.creatureCards.Dexterity, [
            Validators.required
          ]),
          Constitution: new FormControl(this.creatureCards.Constitution, [
            Validators.required
          ]),
          Wisdom: new FormControl(this.creatureCards.Wisdom, [
            Validators.required
          ]),
          Intelligence: new FormControl(this.creatureCards.Intelligence, [
            Validators.required
          ]),
          Charisma: new FormControl(this.creatureCards.Charisma, [
            Validators.required
          ]),
          Notes: new FormControl(this.creatureCards.Notes),
          isHostile: new FormControl(this.isHostile),
          Actions: this.setExistingActions(this.creatureCards.Actions)
        });
      }
    } else {
      this.characterForm = this.fb.group({
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
    return this.characterForm.get("Actions") as FormArray;
  }
  setExistingActions(x) {
    let arr = new FormArray([]);
    x.forEach(y => {
      arr.push(
        this.fb.group({
          Name: y.Name,
          Description: y.Description
        })
      );
    });
    return arr;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onSaveCharacterClick() {
    if (this.characterForm.valid) {
      this.characterForm.controls.CurrentHP.setValue(
        this.characterForm.value.MaxHP
      );
      this.dialogRef.close(this.characterForm.value);
      this.creatureCardService.addCharacterCard(this.characterForm.value);
      console.log(this.creatureCardService.getCreatureCards());
    } else {
      console.log("invalid");
    }
  }
  onSaveToDbClick() {}
  addNewAction(control) {
    control.push(
      this.fb.group({
        Name: [""],
        Description: [""]
      })
    );
    console.log(this.characterForm.get("actions"));
  }
  deleteAction(control, index) {
    control.removeAt(index);
  }
}
