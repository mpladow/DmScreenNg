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
        const session = response;
        this.session.session = session;
        if (session !== null) {
          localStorage.setItem('token', session.token);
          this.decodedToken = this.jwtHelper.decodeToken(session.token);
          this.session.session.AccountId = this.decodedToken.nameid;
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
