import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Resource } from 'src/app/_models/resource.model';
import { ResourcesService } from 'src/app/_services/resources.service';
import { AlertifyService } from 'src/app/_services/alertify.service';



@Component({
  selector: 'app-resource-editor',
  templateUrl: './resource-editor.component.html',
  styleUrls: ['./resource-editor.component.scss']
})
export class ResourceEditorComponent implements OnInit {

  id: number;
  // used to create an instance
  public Editor = ClassicEditor;
  public resource: Resource = {};
  resourceForm = new FormGroup({
    Id: new FormControl(''),
    Category: new FormControl(''),
    Html: new FormControl('')
  });

  //test
  resourceList: Resource[] = [];
  constructor(private route: ActivatedRoute,
    private resourceService: ResourcesService,
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resource.id = 0;
    this.resource.html = "";
    this.resource.category = "";
    this.route.params.subscribe(params => {
      this.resourceForm.value['Id'] = params['id'] > 0 ? params['id'] : 0;
      this.id = params['id'];
    });
    if (this.id > 0) {
      this.resourceService.getResource(this.id).subscribe(data => {
        this.resource = data;
        this.resourceForm.controls['Id'].setValue(data.id);
        this.resourceForm.controls['Category'].setValue(data.category);
        this.resourceForm.controls['Html'].setValue(data.html);
      });
    }

    // set config values to the DKEditor

    // if an id has been passed through, then retrieve the details from the db, then populate the existing model with content
    // else, open a new 
  }
  onGetResourcesClick() {
    // this.resourceService.getResourcesList()
    //   .subscribe((data) => {
    //     this.resourceList = data;
    //     console.log(this.resourceList);
    //   });
    this.alertify.error("error teset alertify");
    console.log("test");
  }
  onSubmit() {
    this.resource.id = +this.resourceForm.value['Id'] !== null ? +this.resourceForm.value['Id'] : 0;
    this.resource.category = this.resourceForm.value['Category'];
    this.resource.html = this.resourceForm.value['Html'];
    this.resourceService.createNewResource(this.resource)
      .subscribe((data) => {
        this.alertify.success("You resource has been saved");
      }, error => {
        this.alertify.error('An error has occurred');
      });
  }
  onResourceListClick() {
    this.router.navigate([`/resources-list`]);
  }

}
