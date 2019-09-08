import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { AccountNote } from '../_models/accountnotes.model';



@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseUrl = environment.apiUrl + '/accountnotes';
  accountNumber = 4;

  constructor(private http:HttpClient) { }
  getAccountNote(id: Number) {
    return this.http.get<AccountNote>(this.baseUrl + '/' + id);
  }
  createNewAccountNotes(model: AccountNote) {
    return this.http.post<AccountNote>(this.baseUrl + '/edit', model);
  }
  saveNotes(model: AccountNote) {
    return this.http.post<AccountNote>(this.baseUrl + `/edit/`, model);
  }
  deleteResource(id: number) {
    console.log(id + 'test');
    return this.http.delete<AccountNote>(this.baseUrl + '/' + id);
  }
}
