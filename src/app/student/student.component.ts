import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudenthttpService } from '../studenthttp.service';
import {Observable } from 'rxjs';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService, StudenthttpService]
})
export class StudentComponent implements OnInit {

   students: any[]
  constructor(private studentService : StudentService, private _httpStudnetService : StudenthttpService) { }

  ngOnInit(): void {
    // this.students = this.studentService.GetStudents();
    this.GetAllStudents();
  }

   GetAllStudents ()
   {
      this._httpStudnetService.GetAllStudents().subscribe(res=> this.students=res);
       
    }
      
       

   }

