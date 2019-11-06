import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    let canLogIn = false;
    if (this.authService.isLoggedIn()) {
      canLogIn = true;
    } else {
      this.alertify.error("You cannot access this page!");
      this.router.navigate(['/login']);
    }
    return canLogIn;
  }
}
