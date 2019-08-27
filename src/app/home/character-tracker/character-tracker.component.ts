import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__, OnChanges, SimpleChanges } from '@angular/core';
import { CharacterService } from 'src/app/_services/character.service';
import { CharacterCard } from 'src/app/_models/charactercard.model';
import { CharacterQuickaddComponent } from './character-quickadd/character-quickadd.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { EncounterInitiativeDialogComponent } from './encounter-initiative-dialog/encounter-initiative-dialog.component';
import { CharactercardService } from 'src/app/_services/charactercard.service';

@Component({
  selector: 'app-character-tracker',
  templateUrl: './character-tracker.component.html',
  styleUrls: ['./character-tracker.component.scss']
})
export class CharacterTrackerComponent implements OnInit {

  characterCards: CharacterCard[] = [
  ];
  encounterMode = false;

  constructor(private characterService: CharacterService,
    public dialog: MatDialog,
    private characterCardService: CharactercardService) { }

  ngOnInit() {
    this.characterCards = this.characterCardService.getCharacterCards();
  }

  onAddCreatureClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CharacterQuickaddComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.characterCards = this.characterCardService.getCharacterCards();
      }
    });
  }
  onInitiateEncounterClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EncounterInitiativeDialogComponent, dialogConfig);
  }

  onCharacterDeleted(character: CharacterCard) {
    this.characterCardService.removeCharacterCard(character);
    this.characterCards = this.characterCardService.getCharacterCards();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.characterCards, event.previousIndex, event.currentIndex);
  }
}
