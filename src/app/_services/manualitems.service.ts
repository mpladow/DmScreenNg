import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ManualItem } from "../_models/manualitem.model";

@Injectable({
  providedIn: "root"
})
export class ManualItemsService {
  baseUrl = environment.apiUrl + "/manual";
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<ManualItem[]>(this.baseUrl);
  }
  edit(id: number) {
    return this.http.get<ManualItem>(this.baseUrl + '/id')
  }
  create(model: ManualItem) {
    return this.http.post<ManualItem>(this.baseUrl, model);
  }
  delete(id: number) {
    return this.http.delete<ManualItem>(this.baseUrl + '/id')
  }
}
