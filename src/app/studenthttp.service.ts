import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IStudent } from './IStudent';
@Injectable({
  providedIn: 'root'
})
export class StudenthttpService {

   students : IStudent[];
  constructor(private _http : HttpClient) { }
  // path : string ="/assets/data.json";
  path : string = "http://localhost:3000/students";
  GetAllStudents()
  {
     return (this._http.get<IStudent[]>(this.path));
  }
}
