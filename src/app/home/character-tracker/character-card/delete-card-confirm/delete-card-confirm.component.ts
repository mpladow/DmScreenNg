import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-card-confirm',
  templateUrl: './delete-card-confirm.component.html',
  styleUrls: ['./delete-card-confirm.component.scss']
})
export class DeleteCardConfirmComponent implements OnInit {
  isDeleted = false;

  constructor(public dialogRef: MatDialogRef<DeleteCardConfirmComponent>) { }

  ngOnInit() {
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onDeleteClick() {
    this.isDeleted = true;
    this.dialogRef.close(this.isDeleted);

  }

}
