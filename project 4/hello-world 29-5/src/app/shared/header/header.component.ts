import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged:boolean=false;
  constructor(private _userService:UserService) { }

  ngOnInit() {
this._userService.getloggedStatus().subscribe(resposne=>{
  //alert(resposne);
  this.logged=resposne;
})
  }

}
