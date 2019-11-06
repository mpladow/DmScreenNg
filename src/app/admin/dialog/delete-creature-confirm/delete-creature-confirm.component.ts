import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreatureCardService } from 'src/app/_services/creaturecard.service';

@Component({
  selector: 'app-delete-creature-confirm',
  templateUrl: './delete-creature-confirm.component.html',
  styleUrls: ['./delete-creature-confirm.component.scss']
})
export class DeleteCreatureConfirmComponent implements OnInit {
  isDeleted = false;
  deleteFromDb = false;

  constructor(public dialogRef: MatDialogRef<DeleteCreatureConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private creatureCardService: CreatureCardService) { }

  ngOnInit() {
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onDeleteClick() {
    let isDeleted = false;
    console.log(this.id['dataKey'])
    this.creatureCardService.delete(this.id['dataKey']).subscribe(result => {
      isDeleted = true;
      this.dialogRef.close(isDeleted);
    }, fail => {
      isDeleted = false;
    });
  }

}
