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
    interfaceStyle : 'Moderate',
    subscriptionType : 'Travel',
    notes : 'some notes...'
  }

  ngOnInit(): void {
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  onSubmit(form : NgForm){
    console.log('in onSubmit: ', form.valid);
    // console.log(this.userSettings);
    var x = document.getElementById("newdiv");
    var y = document.getElementById("myDiv");   x.style.display = "block";
      y.style.display = "none";
   

    
  }
  }
  // alerts: Alert[];
  // close(alert: Alert) {
  //   this.alerts.splice(this.alerts.indexOf(alert), 1);
  // }

  // reset() {
  //   this.alerts = Array.from(ALERTS);
  // }


