import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cheatsheet } from '../_models/cheatsheet.model';

@Injectable({
  providedIn: 'root'
})

export class CheatsheetService {
 cheatsheetArray = [];

  constructor(private http: HttpClient) { }


  generateDummyData() {
    let cheatsheetArray: Cheatsheet[] = [];
    for (let i = 1; i < 6; i++) {
      let sheet: Cheatsheet;
      sheet.PageName = `name ${i} `;
      sheet.CheatsheetId = i;
      sheet.Html = `dsfdsf dsfds fds misdchds f${i}${i}${i}${i}${i}`;
      cheatsheetArray.push(sheet);
    }
    this.cheatsheetArray = cheatsheetArray;
  }
  
  getCheatsheetList() {
    return this.cheatsheetArray;
  }
  getCheatSheetById(id: number) {

  }
  saveCheatSheet(cheatsheet: Cheatsheet) {

  }

}

