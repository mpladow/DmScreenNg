import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Resource } from '../_models/resource.model';
import { SessionService } from './session.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResourcesService implements OnInit {

  resourceslist: Resource[] = [];
  resourcesListSource = new BehaviorSubject<Resource[]>(this.resourceslist)
  resourcesList$ = this.resourcesListSource.asObservable();
  baseUrl = environment.apiUrl + '/resources';

  constructor(private http: HttpClient) { }
  ngOnInit(){
  }

  // get the values from session when we start the app.
  getCurrentResources() {
    // this.resourceslist = this.session.getResourcesList();
    this.resourcesListSource.next(this.resourceslist);

  }
  getResourcesList() {
    return this.http.get<Resource[]>(this.baseUrl);
  }
  getResource(id: Number) {
    return this.http.get<Resource>(this.baseUrl + '/' + id);
  }
  createNewResource(model: Resource) {
    return this.http.post<Resource>(this.baseUrl + '/edit', model);
  }
  deleteResource(id: number) {
    return this.http.delete<Resource>(this.baseUrl + '/' + id);
  }
// communication to the session service
  addSessionResource(resource: Resource) {
    this.resourceslist.push(resource);
    this.resourcesListSource.next(this.resourceslist);
  }
  removeSessionResource(id){
    this.resourceslist = this.resourceslist.filter(obj => {
      return obj.resourceId !== id;
    });
    this.resourcesListSource.next(this.resourceslist);
    // this.session.updateAllResources(this.resourceslist);
  }
}
