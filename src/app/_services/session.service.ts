import { HelperService } from "./helper.service";
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { CreatureCard } from "../_models/creaturecard.model";
import { Resource } from "../_models/resource.model";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { AlertifyService } from "./alertify.service";
import { AccountResource } from "../_models/accountresource.model";
import { Session } from "../_models/session.model";
import { CreatureCardService } from "./creaturecard.service";
import { ResourcesService } from "./resources.service";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class SessionService {
  baseUrl = `${environment.apiUrl}/session`;
  private session: Session = new Session();
  private sessionObs = new BehaviorSubject<Session>(this.session);
  session$ = this.sessionObs.asObservable();
  accountResourcesSubscription;
  creatureCardsSubscription;
  constructor(
    private http: HttpClient,
    private alertify: AlertifyService,
    private resourcesService: ResourcesService,
    private creatureCardService: CreatureCardService
  ) { }


  SetExistingSessionDetails() {
    this.resourcesService.resourceslist = this.session.resources;
    this.creatureCardService.creatureCards = this.session.creatureCards;
  }

  getCurrentSession() {
    return this.session;
  }
  saveSession() {
    this.http.post(this.baseUrl + '/edit', this.session).subscribe(result => {
      console.log(result);
    })
    // set this session to the db
  }
  getSession() {
    let sessionInLocalStorage = localStorage.getItem("session");
    if (sessionInLocalStorage !== null) {
      this.session = JSON.parse(sessionInLocalStorage);
      this.resourcesService.resourceslist = this.session.resources;
      this.creatureCardService.creatureCards = this.session.creatureCards;
    } else {
      // initialise the arrays
      this.session.resources = [];
      this.session.creatureCards = [];
    }


    // else, get the most recent session from the database.
  }
  getCreatureCardsList() {
    return this.session.creatureCards;
  }
  getResourcesList() {
    return this.session.resources;
  }
  getAccountId() {
    return this.session.accountId;
  }

  removeCreatureCard(id: number) {
    this.session.creatureCards = this.session.creatureCards.filter(r => {
      return r.creatureCardId !== id;
    });
    this.updateSessionToLocalStorage();
  }
  removeResource(id: number) {
    this.session.resources = this.session.resources.filter(r => {
      return r.resourceId !== id;
    });
    this.updateSessionToLocalStorage();
  }

  updateAllCreatureCards(creatureCards: CreatureCard[]) {
    this.session.creatureCards = creatureCards;
    this.updateSessionToLocalStorage();
  }
  updateAllResources(resources: Resource[]) {
    this.session.resources = resources;
    this.updateSessionToLocalStorage();
  }

  updateSessionToLocalStorage() {
    localStorage.setItem("session", JSON.stringify(this.session));
  }
}
