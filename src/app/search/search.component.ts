import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  Search = new EventEmitter<string>(); 
 OnStudentSearch (searchText:any)
 {
    console.log(searchText);
    this.Search.emit(searchText);
 }
  constructor() { }

 
  ngOnInit(): void {
  }

}
