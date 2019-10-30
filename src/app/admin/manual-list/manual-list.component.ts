import { ManualItemsService } from "./../../_services/manualitems.service";
import { Component, OnInit } from "@angular/core";
import { AlertifyService } from "src/app/_services/alertify.service";
import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DeleteConfirmComponent } from "../dialog/delete-confirm/delete-confirm.component";
import { ManualItem } from "src/app/_models/manualitem.model";

@Component({
  selector: "app-manual-list",
  templateUrl: "./manual-list.component.html",
  styleUrls: ["./manual-list.component.scss"]
})
export class ManualListComponent implements OnInit {
  manualItems: ManualItem[] = [];
  displayedColumns: string[] = ["id", "category", "subcategory", "actions"];

  constructor(
    private manualItemsService: ManualItemsService,
    public dialog: MatDialog,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.onRefresh();
  }
  onEditClick(e) {
    console.log(e);
    this.router.navigate([`/manual/${e.manualItemId}`]);
  }
  onDeleteClick(e) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dataKey: e.id
    };
    const dialogRef = this.dialog.open(DeleteConfirmComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(isDeleted => {
      if (isDeleted) {
        this.onRefresh();
        this.alertify.success("You have deleted this resource");
      } else {
        this.alertify.error("An error has occurred");
      }
    });
  }
  onRefresh() {
    this.manualItemsService.getList().subscribe(result => {
      this.manualItems = result;
    });
  }
}
