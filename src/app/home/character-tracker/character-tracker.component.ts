import { Component, OnInit} from '@angular/core';
import { CreatureCard } from 'src/app/_models/creaturecard.model';
import { CharacterQuickaddComponent } from './character-quickadd/character-quickadd.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { EncounterInitiativeDialogComponent } from './encounter-initiative-dialog/encounter-initiative-dialog.component';
import { CreatureCardService } from 'src/app/_services/creaturecard.service';
import { SessionService } from 'src/app/_services/session.service';

@Component({
  selector: "app-character-tracker",
  templateUrl: "./character-tracker.component.html",
  styleUrls: ["./character-tracker.component.scss"]
})
export class CharacterTrackerComponent implements OnInit {
  creatureCards: CreatureCard[] = [];
  encounterMode = false;

  constructor(
    public dialog: MatDialog,
    private creatureCardService: CreatureCardService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.creatureCardService.getCreatureCardsFromSession();
    this.creatureCards = this.creatureCardService.getCreatureCards();
    // get a list of all creatures from the database and prepare the dropdown.
  }

  onAddCreatureClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(
      CharacterQuickaddComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.creatureCards = this.creatureCardService.getCreatureCards();
      }
    });
  }
  onInitiateEncounterClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dataKey: this.creatureCards
    };
    const dialogRef = this.dialog.open(
      EncounterInitiativeDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // call the service to re-order the array
        this.creatureCardService.sortByInitiative();
        this.creatureCards = this.creatureCardService.getCreatureCards();
      }
    });
  }

  onCreatureDeleted(creature: CreatureCard) {
    this.creatureCardService.removeCharacterCard(creature);
    this.creatureCards = this.creatureCardService.getCreatureCards();
  }
  onCreatureEdited() {
     this.creatureCards = this.creatureCardService.getCreatureCards();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.creatureCards,
      event.previousIndex,
      event.currentIndex
    );
  }
}
