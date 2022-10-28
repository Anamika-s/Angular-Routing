import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit {

  students : any[] ;
  LoadStudents(filteredText: string) 
  {
     this.students = [
      { studentID: 1, studentName: 'Steve', gender: 'Male', age: 35, course: 'MCA', DOB: '10/12/1982', grade:0.7500,rating:7.5123 },  
      { studentID: 2, studentName: 'Bobby', gender: 'Male', age: 32, course: 'MBA', DOB: '12/1/1985', grade: 0.7850, rating: 7.8223 },  
      { studentID: 3, studentName: 'Rina', gender: 'Female', age: 45, course: 'B.Tech', DOB: '9/11/1972', grade: 0.8525, rating: 8.5263 },  
      { studentID: 4, studentName: 'Alex', gender: 'Female', age: 24, course: 'M.Tech', DOB: '1/1/1993', grade: 0.5540, rating: 5.5123 },  
      { studentID: 5, studentName: 'Rahul', gender: 'Male', age: 26, course: 'MCA', DOB: '1/21/1991', grade: 0.9550, rating: 9.5534 }
     ];
     if(filteredText!=null)
     {
      var filteredStudentList : any [] =[];
      this.students.forEach(stu=> 
        {
          if(stu.studentName.toLowerCase().includes(filteredText))
          {
            console.log("Nem is matcgred" + stu.studentName);
            console.log(stu)
             filteredStudentList.push(stu);
          }
             this.students = filteredStudentList;
          
        })
      }
        else 
        this.students = this.students;
     }
 


  OnStudentSearch(event:any)
  {
  
    console.log(event.value)

    this.LoadStudents(event.value);
  }
  constructor() { }

  ngOnInit(): void {
    this.LoadStudents("");
  }

}
