import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  resultUrl : string = "https://api.covid19india.org/travel_history.json"

  constructor(private http:HttpClient) { }

  getResult(): Observable<any>{
    return this.http.get<any>(this.resultUrl);
  }
}
