import { HelperService } from './helper.service';
import { Injectable } from '@angular/core';
import { CreatureCard } from '../_models/creaturecard.model';
import { Resource } from '../_models/resource.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { AccountResource } from '../_models/accountresource.model';
import { Session } from '../_models/session.model';
import { CreatureCardService } from './creaturecard.service';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: "root"
})
export class SessionService {
  baseUrl = `${environment.apiUrl}/accountresource`;
  session: Session = new Session();

  constructor(
    private http: HttpClient,
    private alertify: AlertifyService,
    private helper: HelperService,
  ) { }
  // this will save the users:
  // Resources, CreatureCards
  // -- future: Notes
  getCurrentSession(){
    return this.session;
  }
  saveSession() {
    // set this session to the db
  }
  getSession() {
    var sessionInLocalStorage = localStorage.getItem('session');
    if (sessionInLocalStorage !== null){
      this.session = JSON.parse(sessionInLocalStorage);
    }
    // else, get the most recent session from the database.

    // retrieve the most recent session of the account
    // save this session object into local storage
    // call the resources and creaturecard sesrvice and set the arrays appropriately property
  }
  getCreatureCardsList(){
    return this.session.CreatureCards;
  }
  getResourcesList() {
    return this.session.Resources;
  }
  getAccountId(){
return this.session.AccountId;
  }
  removeCreatureCard(id: number) {
    this.session.CreatureCards = this.session.CreatureCards.filter(r => {
      return r.CreatureCardId !== id;
    });
    this.updateSessionToLocalStorage();
  }
  removeResource(id: number) {
    this.session.Resources = this.session.Resources.filter(r => {
      return r.id !== id;
    });
    this.updateSessionToLocalStorage();
  }

  updateAllCreatureCards(creatureCards: CreatureCard[]) {
    this.session.CreatureCards = creatureCards;
    this.updateSessionToLocalStorage();

  }
  updateAllResources(resources: Resource[]) {
    this.session.Resources = resources;
    this.updateSessionToLocalStorage();

  }

  retrieveSavedActiveResources(id: number) {
    // call the database and retrieve the saved values
  }
  updateSessionToLocalStorage(){
    localStorage.setItem('session', JSON.stringify(this.session));
  }
}
