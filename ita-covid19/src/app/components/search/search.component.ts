import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { SearchService } from '../../services/search.service';
import { SearchResult } from "../../models/SearchResult"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchStr : string;

  searchResult : SearchResult[];
  oppoSuits: any = ["Patient ID", "Place Visit Timeline", "Travel Timeline", "Full Timeline"];
  
  constructor(public fb: FormBuilder, private searchService : SearchService) { }
  oppoSuitsForm = this.fb.group({
    name: ['']
  })

  ngOnInit(): void {
  }

  searchContent(){
    console.log(this.searchStr);
    const filterValue = this.oppoSuitsForm.value;
    console.log(filterValue);
    this.searchService.getResult().subscribe( result => {
      // console.log(result["travel_history"][0]);
      
      this.searchResult = result["travel_history"];
      if(filterValue.name === 'Patient ID'){
        console.log(filterValue.name);
        this.searchResult = this.searchResult.filter( s => s.pid === this.searchStr);
      }else if(filterValue.name === 'Place Visit Timeline'){
        console.log(filterValue.name);
        this.searchResult = this.searchResult.filter(s => s.type === 'placeVisit');
        
      }else if(filterValue.name === 'Travel Timeline'){
        console.log(filterValue.name);
        this.searchResult = this.searchResult.filter( s => s.type === 'travel');
      }else if(filterValue.name === 'Full Timeline'){
        console.log(filterValue.name);
        this.searchResult = result["travel_history"];
      }
    })
  }

}
