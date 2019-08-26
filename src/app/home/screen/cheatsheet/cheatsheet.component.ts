import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Resource } from 'src/app/_models/resource.model';
@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.scss'],
  encapsulation: ViewEncapsulation.None,


})
export class CheatsheetComponent implements OnInit {

  @Input() Resource: Resource;

  constructor() { }

  ngOnInit() {
  }

}
