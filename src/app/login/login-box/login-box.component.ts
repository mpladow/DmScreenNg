import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/_services/session.service';


@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  @Output() registerMode: EventEmitter<boolean> = new EventEmitter();


  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });
  buttonLoader = false;
  constructor(public authService: AuthService,
    private alertify: AlertifyService, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }
  activateRegisterMode() {
    this.registerMode.emit(true)
  }

  onLoginClick() {

    this.buttonLoader = true;
    this.authService.login(this.loginForm.value).subscribe(
      next => {
        this.buttonLoader = false;
        this.sessionService.getSession();
        this.router.navigate(['/home']);
        this.alertify.success('Logged in successfully');
      },
      error => {
        this.buttonLoader = false;
        if (error.status == 401)
        this.alertify.error("Your username/password is incorrect.");
      }, () => {
      }
    );
  }
}
