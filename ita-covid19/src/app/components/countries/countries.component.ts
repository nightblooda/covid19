import { Component, OnInit } from '@angular/core';
import { Countries } from '../../models/Countries';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries : Countries[];

  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getStats().subscribe(stats => {
      this.countries = stats["Countries"];
      console.log(this.countries);
    })
  }

}
