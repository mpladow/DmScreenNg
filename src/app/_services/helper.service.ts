import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class HelperService {
  constructor() {}

  arrayRemove(arr, value) {
    return arr.filter(ele => {
      return ele.id != value;
    });
  }
}
