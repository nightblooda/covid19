import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { SearchComponent } from './components/search/search.component'
import { FormsComponent } from './components/forms/forms.component'
import { AngularComponent } from './components/angular/angular.component'
import { CountriesComponent } from './components/countries/countries.component';
import { StatesComponent } from './components/states/states.component';


const routes: Routes = [
  {path: "", component: DashboardComponent },
  {path: "about", component: AngularComponent},
  {path: "enroll", component: FormsComponent},
  {path: "search", component: SearchComponent},
  {path: "countries", component: CountriesComponent},
  {path: "states", component: StatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
