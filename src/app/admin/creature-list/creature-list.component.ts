import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/_models/resource.model';
import { ResourcesService } from 'src/app/_services/resources.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DeleteConfirmComponent } from '../dialog/delete-confirm/delete-confirm.component';
import { CreatureCardService } from 'src/app/_services/creaturecard.service';
import { CreatureCard } from 'src/app/_models/creaturecard.model';
import { DeleteCreatureConfirmComponent } from '../dialog/delete-creature-confirm/delete-creature-confirm.component';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss']
})
export class CreatureListComponent implements OnInit {

  creatures: CreatureCard[] = [];
  displayedColumns: string[] = ['creatureCardId', 'name', 'actions'];

  constructor(private creatureCardService: CreatureCardService,
    public dialog: MatDialog,
    private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.onRefresh();
  }
  onEditClick(e) {
    console.log(e);
    this.router.navigate([`/creature/${e.creatureCardId}`]);
  }
  onDeleteClick(e) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dataKey: e.creatureCardId
    }
    const dialogRef = this.dialog.open(DeleteCreatureConfirmComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(isDeleted => {
      if (isDeleted) {
        this.onRefresh();
        this.alertify.success('You have deleted this creature');
      }
    })

  }
  onRefresh() {
    this.creatureCardService.get().subscribe(creatures => {
      this.creatures = creatures;
    });
  }
}
