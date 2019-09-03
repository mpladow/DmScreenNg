import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/_services/resources.service';
import { Router } from '@angular/router';
import { Resource } from 'src/app/_models/resource.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from '../dialog/delete-confirm/delete-confirm.component';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {

  resources: Resource[] = [];
  displayedColumns: string[] = ['id', 'category', 'actions'];

  constructor(private resourceService: ResourcesService,
    public dialog: MatDialog,
    private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.onRefresh();
  }
  onEditClick(e) {
    console.log(e);
    this.router.navigate([`/resource/${e.id}`]);
  }
  onDeleteClick(e) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dataKey: e.id
    }
    console.log(e.id);
    const dialogRef = this.dialog.open(DeleteConfirmComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(isDeleted => {
      if (isDeleted) {
        this.onRefresh();
        this.alertify.success('You have deleted this resource')
      } else {
        this.alertify.error('An error has occurred');
      }
    })

  }
  onRefresh() {
    this.resourceService.getResourcesList().subscribe(resources => {
      this.resources = resources;
    });
  }

}
