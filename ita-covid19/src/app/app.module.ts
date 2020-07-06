import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './components/angular/angular.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FormsComponent } from './components/forms/forms.component';
import { CountriesComponent } from './components/countries/countries.component';
import { StatesComponent } from './components/states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    DashboardComponent,
    HeaderComponent,
    SearchComponent,
    FormsComponent,
    CountriesComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
