import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CreatureCard } from 'src/app/_models/creaturecard.model';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Resource } from 'src/app/_models/resource.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from 'src/app/_services/resources.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { CreatureCardService } from 'src/app/_services/creaturecard.service';
import { CreatureAction } from 'src/app/_models/creatureaction.model';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: "app-creature-editor",
  templateUrl: "./creature-editor.component.html",
  styleUrls: ["./creature-editor.component.scss"]
})
export class CreatureEditorComponent implements OnInit {
  id: number;
  // used to create an instance
  public Editor = ClassicEditor;
  public creature: CreatureCard = {};
  creatureForm = new FormGroup({
    CreatureCardId: new FormControl(0),
    Name: new FormControl("", [Validators.required]),
    Level: new FormControl(""),
    AC: new FormControl(""),
    MaxHP: new FormControl(""),
    Initiative: new FormControl("", [Validators.required]),
    PPerception: new FormControl("", [Validators.required]),
    PInvestigation: new FormControl("", [Validators.required]),
    PInsight: new FormControl(""),
    Strength: new FormControl(""),
    Dexterity: new FormControl(""),
    Constitution: new FormControl(""),
    Wisdom: new FormControl(""),
    Intelligence: new FormControl(""),
    Charisma: new FormControl(""),
    Notes: new FormControl(""),
    IsHostile: new FormControl(""),
    Actions: new FormArray([])
  });
  isLoading = false;
  isHostile = false;
  // Font Awesome Icons used
  faPlus = faPlus;
  faTimes = faTimes;
  constructor(
    private route: ActivatedRoute,
    private creatureCardService: CreatureCardService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.creatureForm.value["creatureCardId"] =
        params["id"] > 0 ? params["id"] : 0;
      this.id = params["id"];
    });
    if (this.id > 0) {
      this.creatureCardService.getCard(this.id).subscribe(data => {
        this.creature = data;
        this.creatureForm.controls["CreatureCardId"].setValue(
          data.creatureCardId
        );
        this.creatureForm.controls["Name"].setValue(data.name);
        this.creatureForm.controls["AC"].setValue(data.ac);
        this.creatureForm.controls["MaxHP"].setValue(data.ac);
        this.creatureForm.controls["Initiative"].setValue(data.initiative);
        this.creatureForm.controls["PPerception"].setValue(data.pPerception);
        this.creatureForm.controls["PInvestigation"].setValue(
          data.pInvestigation
        );
        this.creatureForm.controls["PInsight"].setValue(data.pInsight);
        this.creatureForm.controls["Strength"].setValue(data.strength);
        this.creatureForm.controls["Dexterity"].setValue(data.dexterity);
        this.creatureForm.controls["Constitution"].setValue(data.constitution);
        this.creatureForm.controls["Dexterity"].setValue(data.dexterity);
        this.creatureForm.controls["Wisdom"].setValue(data.strength);
        this.creatureForm.controls["Intelligence"].setValue(data.intelligence);
        this.creatureForm.controls["Charisma"].setValue(data.charisma);
        this.creatureForm.controls["Notes"].setValue(data.notes);
        this.creatureForm.controls["IsHostile"].setValue(data.isHostile);
        this.creatureForm.controls["Actions"].setValue(
          this._setExistingActions(data.actions)
        );
      });
    }
  }
  // form getters
  get actions() {
    return this.creatureForm.get("Actions") as FormArray;
  }
  onSubmit() {
    this.isLoading = true;
    this.creatureCardService.create(this.creatureForm.value).subscribe(
      data => {
        this.isLoading = false;
        this.alertify.success("You creature has been saved");
      },
      error => {
        this.isLoading = false;
        this.alertify.error("An error has occurred");
      }
    );
  }
  onResourceListClick() {
    this.router.navigate([`/creature-list`]);
  }
  _setExistingActions(x: CreatureAction[]) {
    const arr = new FormArray([]);
    if (x != undefined) {
      x.forEach(y => {
        arr.push(
          this.fb.group({
            Name: y.name,
            Description: y.description
          })
        );
      });
    }
    return arr;
  }
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
  };
}
