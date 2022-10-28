import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this._userService.GetAllUsers().subscribe(res => console.log(res));
  }

}
