import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CharacterCard } from 'src/app/_models/charactercard.model';
import { FormGroup } from '@angular/forms';
import { CharactercardService } from 'src/app/_services/charactercard.service';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteConfirmComponent } from 'src/app/admin/dialog/delete-confirm/delete-confirm.component';
import { DeleteCardConfirmComponent } from './delete-card-confirm/delete-card-confirm.component';


@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit, OnChanges {

  @Input() character: CharacterCard;
  @Output() deleted = new EventEmitter<CharacterCard>();
  characterModifyForm: FormGroup;
  faTimes = faTimes;


  constructor(
    private characterCardService: CharactercardService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }
  onRemoveCreatureClick() {
    // tslint:disable-next-line: one-variable-per-declaration
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DeleteCardConfirmComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((isDeleted) => {
      if (isDeleted) {
        this.deleted.emit(this.character);
      }
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  onUpdateNotes(e: string) {
    this.character.Notes = e;
    this.characterCardService.updateCharacterCard(this.character);
  }

}
