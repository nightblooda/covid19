import { Component, OnInit } from '@angular/core';
import { GlobalStats } from '../../models/GlobalStats'
import { Countries } from '../../models/Countries'
import { DashboardService } from '../../services/dashboard.service';
import { Timeline } from '../../models/Timeline';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  gs : GlobalStats;
  countries : Countries[];
  india : Countries[];
  timeline : Timeline[];
  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
    this.dashboardService.getStats().subscribe(stats => {
      // console.log(stats["Global"]);
      this.gs = stats["Global"];
      this.countries = stats["Countries"];
      this.india = this.countries.filter( s => s.Country === "India");
      console.log(this.gs);
      console.log(this.countries);
      console.log(this.india);
    })
    this.dashboardService.getTimeline().subscribe( t => {
      this.timeline = t["cases_time_series"];
      this.timeline = this.timeline.reverse();
      console.log(this.timeline);
    })
  }



}
