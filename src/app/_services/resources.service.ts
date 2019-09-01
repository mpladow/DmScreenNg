import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Resource } from '../_models/resource.model';
@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  baseUrl = environment.apiUrl + '/resources';

  constructor(private http: HttpClient) { }

  getResourcesList() {
    return this.http.get<Resource[]>(this.baseUrl);
  }
  getResource(id: Number) {
    return this.http.get<Resource>(this.baseUrl + '/' + id);
  }
  createNewResource(model: Resource) {
    var url = this.baseUrl + '/edit';
    return this.http.post<Resource>(this.baseUrl + '/edit', model);
  }
  deleteResource(id: number){
    return this.http.delete<Resource>(this.baseUrl + '/delete/' + id);
  }
}
