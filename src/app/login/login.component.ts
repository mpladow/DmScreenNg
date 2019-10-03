import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SessionService } from '../_services/session.service';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class LoginComponent implements OnInit {
  registerMode = false;
  
  constructor(public authService: AuthService,
    private alertify: AlertifyService, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }
  onRegisterModeChange($event){
    this.registerMode = $event;
  }

}
