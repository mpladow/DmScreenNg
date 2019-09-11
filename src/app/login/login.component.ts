import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SessionService } from '../_services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerMode = false;
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
    this.registerMode = true;
  }


  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
  onLoginClick() {
    console.log(this.loginForm.value);
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
        this.alertify.error(error.error);
      }, () => {
      }
    );
  }
}
