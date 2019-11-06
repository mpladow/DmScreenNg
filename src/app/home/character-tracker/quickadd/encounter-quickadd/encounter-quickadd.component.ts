import { CreatureCardService } from "./../../../../_services/creaturecard.service";
import { Component, OnInit } from "@angular/core";
import { CreatureCard } from "src/app/_models/creaturecard.model";
import { DialogConfirmAddCreatureComponent } from '../dialog-confirm-add-creature/dialog-confirm-add-creature.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-encounter-quickadd",
  templateUrl: "./encounter-quickadd.component.html",
  styleUrls: ["./encounter-quickadd.component.scss"]
})
export class EncounterQuickaddComponent implements OnInit {
  creatures: CreatureCard[] = [];
  filteredCreatures: CreatureCard[] = [];
  selectedCreatures: CreatureCard[] = [];

  searchQuery: string;
  constructor(private creatureCardService: CreatureCardService,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.creatureCardService.get().subscribe(result => {
      this.creatures = result;
      this.filteredCreatures = this.creatures;
    });
  }
  getList() {
    this.creatureCardService.get().subscribe(result => {
      this.creatures = result;
    });
    if (this.searchQuery != undefined) {
      this.filteredCreatures = this.creatures.filter(c => c.name.toLowerCase().includes(this.searchQuery.toLowerCase()));

    } else {
      return this.creatures;
    }
  }
  onAddCreatureClick(e) {
    // open dialog. if successful, then add the creature, else, dont.
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(
      DialogConfirmAddCreatureComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(success => {
      if (success){
        this.creatureCardService.addExistingCreatureCard(e);
      }
    });
  }


}
