import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/app/_models/resource.model';
@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.scss'],
  encapsulation: ViewEncapsulation.None,


})
export class CheatsheetComponent implements OnInit {

  @Input() Resource: Resource;
  @Output() cheatsheetDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  deleteCheatsheet() {
    this.cheatsheetDeleted.emit(this.Resource.id);
    console.log(this.Resource.id);
  }
}
