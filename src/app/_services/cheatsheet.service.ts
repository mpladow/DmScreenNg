import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../_models/resource.model';

@Injectable({
  providedIn: 'root'
})

export class CheatsheetService {
 resourceArray = [];

  constructor(private http: HttpClient) { }


  generateDummyData() {
    let _resourceArray: Resource[] = [];
    for (let i = 1; i < 6; i++) {
      let _resource: Resource;
      _resource.Id = i;  
      _resource.Html = `dsfdsf dsfds fds misdchds f${i}${i}${i}${i}${i}`;
      _resource.Category = "Test"
      this.resourceArray.push(_resource);
    }
    this.resourceArray = _resourceArray;
  }
  
  getCheatsheetList() {
    return this.resourceArray;
  }
  getCheatSheetById(id: number) {

  }
  saveCheatSheet(cheatsheet: Resource) {

  }

}

