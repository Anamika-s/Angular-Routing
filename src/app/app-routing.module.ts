import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DeptOverviewComponent } from './dept-overview/dept-overview.component';

import { ContactComponent } from './contact/contact.component';
import { combineLatest } from 'rxjs';
const routes : Routes  = [
  {path:"", component: DepartmentListComponent},
  {path:"first", component:FirstComponent},
  {path:"second", component:SecondComponent},
  {path:'deptlist', component:DepartmentListComponent},
  {path:'deptdetails/:id', component :DepartmentDetailsComponent , 
  children:
[
  {path:'contact' ,component :ContactComponent},
  {path:'overview' , component: DeptOverviewComponent}
]},
  {path:'**', component:PagenotfoundComponent}
];
@NgModule({
  declarations: [ FirstComponent,
  SecondComponent, DepartmentListComponent, PagenotfoundComponent, DepartmentDetailsComponent, DeptOverviewComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }


export const RouteComponents =[
  FirstComponent,
  SecondComponent,
  DepartmentListComponent,
PagenotfoundComponent, DepartmentDetailsComponent ,
ContactComponent, DeptOverviewComponent];