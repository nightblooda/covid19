import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    var dropdown = document.getElementById("navbar");
    if(dropdown.style.display == 'block'){
      dropdown.style.display = 'none';
    }else{
      dropdown.style.display = 'block';
    }
  }

}
