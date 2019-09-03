import { HelperService } from './helper.service';
import { Injectable } from '@angular/core';
import { CharacterCard } from '../_models/charactercard.model';
import { Resource } from '../_models/resource.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { AccountResource } from '../_models/accountresource.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  baseUrl = `${environment.apiUrl}/accountresource`;
  accountResources: Resource[] = [];
  accountCharacterCards: CharacterCard[] = [];

  constructor(private http: HttpClient,
    private alertify: AlertifyService,
    private helper: HelperService) { }
  getActiveCharacterCards() {

  }
  getActiveResourceSheets() {
    return this.accountResources;
  }
  saveActiveCharacterCards(characterCards: CharacterCard[]) {

  }
  saveActiveResourceSheets() {
    let model: AccountResource = {};
    model.AccountId = 4; // find out how to get value from jwt
    model.Resources = this.accountResources;
    this.http.post(this.baseUrl + '/save', model).subscribe((result) => {
      console.log(result);
      this.alertify.success('Your resources have been saved!');
    }, fail => {
      this.alertify.error('Something went wrong');
    })
  }
  addActiveResourceSheet(resource: Resource) {
    this.accountResources.push(resource);
  }
  addActiveCharacterCard(characterCard: CharacterCard) {
    this.accountCharacterCards.push(characterCard);
  }
  removeActiveResourceSheet(id: number) {
    console.log(this.accountResources)
    this.accountResources = this.accountResources.filter(r => {
      return r.id !== id;
    })  }
  retrieveSavedActiveResources(id: number){
// call the database and retrieve the saved values
  }
}
