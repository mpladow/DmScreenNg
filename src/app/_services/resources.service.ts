import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Resource } from '../_models/resource.model';
@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getResourcesList() {
    return this.http.get<Resource[]>(this.baseUrl + '/resources');
  }
  getResource(id: Number) {
    return this.http.get<Resource>(this.baseUrl + '/resources/edit' + id);
  }
  createNewResource(model: Resource) {
    return this.http.post(this.baseUrl + '/resources/edit', model);
  }
  deleteResource(id: number){
    return this.http.get<Resource>(this.baseUrl + '/resources/delete' + id);

  }
}
