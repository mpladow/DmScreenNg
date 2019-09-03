import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  accountForm = new FormGroup({
    Email: new FormControl('', Validators.required),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  get Email() { return this.accountForm.get('Email'); }
  get FirstName() { return this.accountForm.get('FirstName'); }
  get LastName() { return this.accountForm.get('LastName'); }
  get Password() { return this.accountForm.get('Password'); }

  constructor(private authService: AuthService,
    private alertify: AlertifyService) {}

  ngOnInit() {}

  onRegisterClick() {
    console.log(this.accountForm.value)
    this.authService.register(this.accountForm.value)
    .subscribe(() => {
      this.cancelRegister.emit(false);
      this.alertify.success('Registration Successful');
    }, error => {
      this.alertify.error(error.error);

    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
