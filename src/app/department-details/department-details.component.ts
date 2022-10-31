import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: ` <h2> Department Details   : {{departmentId}} </h2>
     <button (click) = "overview()"> Overview </button>
     <button (click) = "contact()"> contact </button>
     <a (click)="goPrev()"> Go Previous </a>
     <a (click)="goNext()"> Go Next </a>

     <router-outlet> </router-outlet>`,
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
    departmentId  : any;
  constructor(private activateRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    // let id = this.activateRoute.snapshot.paramMap.get("id");
  this.activateRoute.paramMap.subscribe((params : ParamMap)=>
    {

    let id = params.get("id");
    console.log(id);
    this.departmentId = id;
    })
  }
 overview()
 {
console.log("overview")
this.router.navigate(['overview'], {relativeTo:this.activateRoute});
 }
 contact()
 {
   console.log("contact")
   this.router.navigate(['contact'], {relativeTo:this.activateRoute});
 }
 goNext()
  {
    let nextId =  parseInt(this.departmentId +1);
    this.router.navigate(["deptdetails" ,  nextId]);
    console.log("Inside GO Next")
  }
  goPrev()
  {
    let prevId = this.departmentId-1;
    console.log(prevId);
    this.router.navigate(["deptdetails" ,  prevId]);
    console.log("Inside GO Prev")
  }

}
