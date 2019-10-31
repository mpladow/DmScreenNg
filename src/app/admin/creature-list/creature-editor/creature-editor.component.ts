import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CreatureCard } from 'src/app/_models/creaturecard.model';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Resource } from 'src/app/_models/resource.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from 'src/app/_services/resources.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { CreatureCardService } from 'src/app/_services/creaturecard.service';


@Component({
  selector: 'app-creature-editor',
  templateUrl: './creature-editor.component.html',
  styleUrls: ['./creature-editor.component.scss']
})
export class CreatureEditorComponent implements OnInit {


  id: number;
  // used to create an instance
  public Editor = ClassicEditor;
  public creature: CreatureCard = {};
  creatureForm = new FormGroup({
    CreatureCardId: new FormControl(this.creature.creatureCardId),
    Name: new FormControl(this.creature.name, [Validators.required]),
    Level: new FormControl(this.creature["level"]),
    AC: new FormControl(this.creature.ac),
    MaxHP: new FormControl(this.creature["maxHP"]),
    Initiative: new FormControl(this.creature["initiative"], [
      Validators.required
    ]),
    PPerception: new FormControl(this.creature["pPerception"], [
      Validators.required
    ]),
    PInvestigation: new FormControl(this.creature["pInvestigation"], [
      Validators.required
    ]),
    PInsight: new FormControl(this.creature["pInsight"], [
      Validators.required
    ]),
    Strength: new FormControl(this.creature["strength"], [
      Validators.required
    ]),
    Dexterity: new FormControl(this.creature["dexterity"], [
      Validators.required
    ]),
    Constitution: new FormControl(this.creature["constitution"], [
      Validators.required
    ]),
    Wisdom: new FormControl(this.creature["wisdom"], [
      Validators.required
    ]),
    Intelligence: new FormControl(this.creature["intelligence"], [
      Validators.required
    ]),
    Charisma: new FormControl(this.creature["charisma"], [
      Validators.required
    ]),
    Notes: new FormControl(this.creature.notes),
    isHostile: new FormControl(this.creature.isHostile),
    Actions: new FormArray([])

  });
  isLoading = false;

  constructor(private route: ActivatedRoute,
    private creatureCardService: CreatureCardService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.creatureForm.value['creatureCardId'] = params['creatureCardId'] > 0 ? params['creatureCardId'] : 0;
      this.id = params['creatureCardId'];
    });
    if (this.id > 0) {
      this.creatureCardService.getCard(this.id).subscribe(data => {
        this.creature = data;
        this.creatureForm.controls["Id"].setValue(data.creatureCardId);
        this.creatureForm.controls['Name'].setValue(data.name);
        this.creatureForm.controls['AC'].setValue(data.ac);
        this.creatureForm.controls['MaxHP'].setValue(data.ac);
        this.creatureForm.controls['Initiative'].setValue(data.initiative);
        this.creatureForm.controls['PPerception'].setValue(data.pPerception);
        this.creatureForm.controls['PInvestigation'].setValue(data.pInvestigation);
        this.creatureForm.controls['PInsight'].setValue(data.pInsight);
        this.creatureForm.controls['Strength'].setValue(data.strength);
        this.creatureForm.controls['Dexterity'].setValue(data.dexterity);
        this.creatureForm.controls['Constitution'].setValue(data.constitution);
        this.creatureForm.controls['Dexterity'].setValue(data.dexterity);
        this.creatureForm.controls['Wisdom'].setValue(data.strength);
        this.creatureForm.controls['Intelligence'].setValue(data.intelligence);
        this.creatureForm.controls['Charisma'].setValue(data.charisma);
        this.creatureForm.controls['Notes'].setValue(data.notes);
        this.creatureForm.controls['isHostile'].setValue(data.isHostile);
        this.creatureForm.controls['Actions'] = this._setExistingActions(data.actions);
      });
    }

  }
  onSubmit() {
    this.isLoading = true;
    this.creatureCardService.create(this.creatureForm.value)
      .subscribe((data) => {
        this.isLoading = false;
        this.alertify.success("You creature has been saved");
      }, error => {
        this.isLoading = false;
        this.alertify.error('An error has occurred');
      });
  }
  onResourceListClick() {
    this.router.navigate([`/creature-list`]);
  }
  _setExistingActions(x) {
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

}
