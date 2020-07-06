import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../../models/UserSettings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  userSettings: UserSettings = {
    name : 'Sheldon',
    emailOffers : true,
    interfaceStyle : 'Dark',
    subscriptionType : 'Annual',
    notes : 'some notes...'
  }
  constructor() { }

  ngOnInit(): void {
  }
  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  onSubmit(form : NgForm){
    console.log('in onSubmit: ', form.valid);
  }

}
