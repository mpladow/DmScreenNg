import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacterQuickaddComponent } from 'src/app/home/character-tracker/character-quickadd/character-quickadd.component';
import { FormBuilder } from '@angular/forms';
import { CharactercardService } from 'src/app/_services/charactercard.service';
import { ResourcesService } from 'src/app/_services/resources.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CharacterQuickaddComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private resourceService: ResourcesService) { }

  ngOnInit() {
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onDeleteClick() {
    let isDeleted = false;
    console.log(this.id['dataKey'])
    this.resourceService.deleteResource(this.id['dataKey']).subscribe(result => {
      isDeleted = true;
      this.dialogRef.close(isDeleted);
    }, fail => {
      isDeleted = false;
    });
  }
}
