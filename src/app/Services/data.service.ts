import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://api.spaceXdata.com/v3';
  httpCall(method, url) {
    return this.http[method.toLowerCase()](`${this.baseUrl}/${url}`)
  }
}
