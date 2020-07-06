import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { States } from '../../models/States';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  states : States[];

  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getStates().subscribe(states => {
      this.states = states["state"]
      console.log(this.states);

    })
  }

}
