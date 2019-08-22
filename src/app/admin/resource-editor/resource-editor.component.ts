import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule ,FormControl } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
              private resourceService: ResourcesService,
              private alertify: AlertifyService
    ) {}

  ngOnInit() {
    this.resource.Id = 0;
    this.resource.Html = "";
    this.resource.Category = "";
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
  
    // set config values to the DKEditor

    // if an id has been passed through, then retrieve the details from the db, then populate the existing model with content
    // else, open a new 
  }
  onSubmit(){
    this.resourceService.createNewResource(this.resourceForm.value)
    .subscribe(data => {
      console.log("success");
    }, error => {
      console.log("error");
    });
  }

}
