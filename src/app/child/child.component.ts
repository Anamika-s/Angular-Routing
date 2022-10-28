import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
   data : string

  //  @Output()
  //  onClick = new EventEmitter();


  @Output()
   onClick = new EventEmitter<string>();

   
  constructor() { }

  ngOnInit(): void {
  }

}
