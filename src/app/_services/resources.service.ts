import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Resource } from '../_models/resource.model';
import { SessionService } from './session.service';
@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  resourceslist: Resource[] = [];
  baseUrl = environment.apiUrl + '/resources';

  constructor(private http: HttpClient, private session: SessionService) { }

  // get the values from session when we start the app.
  getcurrentResourcesFromSession() {
    this.resourceslist = this.session.getResourcesList();
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
  getCurrentResources() {
    return this.resourceslist;
  }
  addSessionResource(resource: Resource) {
    this.resourceslist.push(resource);
    this.session.updateAllResources(this.resourceslist);
  }
  removeSessionResource(id){
    this.resourceslist = this.resourceslist.filter(obj => {
      return obj.id !== id;
    });
    this.session.updateAllResources(this.resourceslist);
  }
}
