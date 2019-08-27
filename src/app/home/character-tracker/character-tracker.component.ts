import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
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

  ngOnInit() { }


  onAddCreatureClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CharacterQuickaddComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
        // this.characterCards.push(result);
        this.characterCards = this.characterCardService.getCharacterCards();
    });
  }
  onInitiateEncounterClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EncounterInitiativeDialogComponent, dialogConfig)
  }
  
  onCharacterDeleted(character: CharacterCard) {
    console.log('character is in the parent and is being deleted.');
    // this.characterCards = this.characterCards.filter((obj) => {
    //   return obj.Name !== character.Name;
    // });
    this.characterCardService.removeCharacterCard(character);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.characterCards, event.previousIndex, event.currentIndex);
  }
}
