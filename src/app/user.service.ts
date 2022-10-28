import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 path : string ="https://jsonplaceholder.typicode.com/users";
  constructor(private _httpService : HttpClient) { 


  }

  GetAllUsers()
  {
     return this._httpService.get(this.path);
  }
}
