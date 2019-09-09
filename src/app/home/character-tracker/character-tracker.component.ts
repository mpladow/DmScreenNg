import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__, OnChanges, SimpleChanges } from '@angular/core';
import { CreatureCard } from 'src/app/_models/creaturecard.model';
import { CharacterQuickaddComponent } from './character-quickadd/character-quickadd.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { EncounterInitiativeDialogComponent } from './encounter-initiative-dialog/encounter-initiative-dialog.component';
import { CreatureCardService } from 'src/app/_services/creaturecard.service';

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
    private characterCardService: CreatureCardService
  ) {}

  ngOnInit() {
    this.creatureCards = this.characterCardService.getCreatureCards();
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
        this.creatureCards = this.characterCardService.getCreatureCards();
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
        this.characterCardService.sortByInitiative();
        this.creatureCards = this.characterCardService.getCreatureCards();
      }
    });
  }

  onCharacterDeleted(creature: CreatureCard) {
    this.characterCardService.removeCharacterCard(creature);
    this.creatureCards = this.characterCardService.getCreatureCards();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.creatureCards,
      event.previousIndex,
      event.currentIndex
    );
  }
}
