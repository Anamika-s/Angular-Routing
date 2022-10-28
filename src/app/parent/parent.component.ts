import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name : string ="Deepak";
  constructor() { }
  IAmCalledFromChild(event:any)
  {
    console.log(event)
     console.log("Called from Child Component")
  }
  ngOnInit(): void {
  }

}
