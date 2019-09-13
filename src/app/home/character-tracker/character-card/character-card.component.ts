import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CreatureCard } from "src/app/_models/creaturecard.model";
import { FormGroup } from "@angular/forms";
import { CreatureCardService } from "src/app/_services/creaturecard.service";
import { faPlus, faTimes, faPen } from "@fortawesome/free-solid-svg-icons";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DeleteConfirmComponent } from "src/app/admin/dialog/delete-confirm/delete-confirm.component";
import { DeleteCardConfirmComponent } from "./delete-card-confirm/delete-card-confirm.component";
import { CharacterQuickaddComponent } from "../character-quickadd/character-quickadd.component";

@Component({
  selector: "app-character-card",
  templateUrl: "./character-card.component.html",
  styleUrls: ["./character-card.component.scss"]
})
export class CharacterCardComponent implements OnInit, OnChanges {
  @Input() creature: CreatureCard;
  @Output() deleted = new EventEmitter<CreatureCard>();
  characterModifyForm: FormGroup;
  faTimes = faTimes;
  faPen = faPen;

  constructor(
    private characterCardService: CreatureCardService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}
  onRemoveCreatureClick() {
    // tslint:disable-next-line: one-variable-per-declaration
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(
      DeleteCardConfirmComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(isDeleted => {
      if (isDeleted) {
        this.deleted.emit(this.creature);
      }
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  onUpdateNotes(e: string) {
    this.creature.notes = e;
    this.characterCardService.updateCharacterCard(this.creature);
  }
  onEditCreatureClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      dataKey: this.creature
    };
    const dialogEdit = this.dialog.open(
      CharacterQuickaddComponent,
      dialogConfig
    );
    dialogEdit.componentInstance.editMode = true;
  }
}
