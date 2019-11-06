import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm-add-creature',
  templateUrl: './dialog-confirm-add-creature.component.html',
  styleUrls: ['./dialog-confirm-add-creature.component.scss']
})
export class DialogConfirmAddCreatureComponent implements OnInit {

  nameOfCard: string;
  constructor(private dialogRef: MatDialogRef<DialogConfirmAddCreatureComponent>,
    @Inject(MAT_DIALOG_DATA) public name: string) { }

  ngOnInit() {
    this.nameOfCard = name;
  }
  onCancelClick() {
    this.dialogRef.close(false);
  }
  onConfirmClick() {
    this.dialogRef.close(true);
  }

}
