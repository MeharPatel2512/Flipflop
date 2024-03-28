import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataminpService {

  private baseUrl = 'https://dummyjson.com/products';

  constructor(private _http : HttpClient) { }

  getdata(){
    return this._http.get(this.baseUrl)
  }
}
