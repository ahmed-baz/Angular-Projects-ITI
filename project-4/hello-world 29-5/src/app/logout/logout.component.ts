import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _userService:UserService) { }

  ngOnInit() {
    localStorage.removeItem("email");
    this._userService.setloggedStatus(false);
  }

}
