import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NotesService } from 'src/app/_services/notes.service';
import { AccountNote } from 'src/app/_models/accountnotes.model';
import { AlertifyService } from 'src/app/_services/alertify.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public Editor = ClassicEditor;
  note: AccountNote = {};
  constructor(private notesService: NotesService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.notesService.getAccountNote(4).subscribe((result) => {
      if(result == null) {
        this.note.AccountId = 4; //this needs to be inserted from the json token
        this.note.Notes = "";
        this.notesService.createNewAccountNotes(this.note).subscribe(newNote=>{
          console.log(`newnote=${newNote}`)
          this.note = newNote;
        });
      } else {
        this.note = result;
        console.log(result);


      }
    });
    console.log(this.note);
  }
  saveNotes() {
    this.notesService.saveNotes(this.note).subscribe(result =>{
      this.alertify.success("Your notes have been saved.");
    }, error =>
    this.alertify.error('an error has occurred'));
  }

}
