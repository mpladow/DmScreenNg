import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Session } from '../_models/session.model';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = `${environment.apiUrl}/auth`;
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient, private session: SessionService) { }

  login(model: any){
    return this.http.post(`${this.baseUrl}/login`, model)
    .pipe(
      map((response: any) =>  {
        const session: Session = response;
        if (session !== null) {
          this.decodedToken = this.jwtHelper.decodeToken(response.token);
          session.accountId = this.decodedToken.nameid;
          localStorage.setItem("session", JSON.stringify(session));
          localStorage.setItem("token", response.token);
        }
      })
    )
  }

  register(model: any){
    return this.http.post(`${this.baseUrl}/register`, model);
  }

  isLoggedIn():boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
