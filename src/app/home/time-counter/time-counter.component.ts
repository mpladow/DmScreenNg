import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time-counter',
  templateUrl: './time-counter.component.html',
  styleUrls: ['./time-counter.component.scss']
})
export class TimeCounterComponent implements OnInit {

  currentTime;
  constructor() { }

  ngOnInit() {
    this.currentTime = moment().format('HH:mm A');
  }

}
