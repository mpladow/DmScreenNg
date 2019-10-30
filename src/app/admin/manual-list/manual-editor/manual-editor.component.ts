import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from 'src/app/_services/resources.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ManualItem } from 'src/app/_models/manualitem.model';
import { ManualItemsService } from 'src/app/_services/manualitems.service';


@Component({
  selector: 'app-manual-editor',
  templateUrl: './manual-editor.component.html',
  styleUrls: ['./manual-editor.component.scss']
})
export class ManualEditorComponent implements OnInit {

  public Editor = ClassicEditor;
  id: number;
  manualItem: ManualItem = new ManualItem();
  categories: string[] = [
    'Abilities', 'Combat', 'Adventuring', 'Random Tables', 'World Building'
  ];
  manualItemForm = new FormGroup({
    ManualId: new FormControl(''),
    Category: new FormControl(''),
    SubCategory: new FormControl(''),
    Html: new FormControl('')
  })
  isLoading = false;
  constructor(private route: ActivatedRoute,
    private manualItemsService: ManualItemsService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.manualItemForm.value['ManualId'] = params['id'] > 0 ? params['id'] : 0;
      this.id = params['id'];
    });
    if (this.id > 0) {
      this.manualItemsService.edit(this.id).subscribe(data => {
        this.manualItem = data;
        this.manualItemForm.controls["ManualId"].setValue(data.manualId);
        this.manualItemForm.controls['Category'].setValue(data.category);
        this.manualItemForm.controls['SubCategory'].setValue(data.subcategory);
        this.manualItemForm.controls['Html'].setValue(data.html);
      });
    }
  }
  onReturnClick() {
    this.router.navigate(['/manual-list']);
  }
  onSubmit() {
    this.isLoading = true;
    this.manualItemsService.create(this.manualItemForm.value)
      .subscribe(result => {
        this.isLoading = false;
        this.alertify.success("You resource has been saved");
      }, error => {
        this.isLoading = false;
        this.alertify.error('An error has occurred');
      });
  }

}
