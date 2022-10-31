import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `<h3> Department List 
      <ul>
      <li (click) = "onSelect(department)" *ngFor="let department of departments">
      {{department.name}} | <span> {{department.id}} </span> 
      </li>
      </ul>
    
      `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

   departments =
   [
    {"id":1 , name:"Angular"},
    {"id":2 , name:"Java"},
    {"id":3 , name:"Python"},
    {"id":4 , name:"C#"},
    {"id":5 , name:"React"},
    {"id":6 , name:"DotNet"}
   ]
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onSelect(department : any)
  {
      console.log(department)
      this.router.navigate(["/deptdetails", department.id]);
  }
 
}
