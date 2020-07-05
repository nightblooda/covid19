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
export class DashboardService {
  globalStatsUrl : string = "https://api.covid19api.com/summary";

  timelineUrl : string = "https://api.covid19india.org/data.json";

  constructor(private http:HttpClient) { }

  getStats() : Observable<any>{
    return this.http.get<any>(this.globalStatsUrl);
  }

  getTimeline() : Observable<any>{
    return this.http.get<any>(this.timelineUrl);
  }
}
