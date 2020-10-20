import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  constructor(private _formBuilder:FormBuilder,
    private _userService:UserService
    ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm()
  {
this.formLogin=this._formBuilder.group({
  Email:['default.email@email.com',[Validators.required,Validators.email,Validators.maxLength(30),Validators.minLength(6)]],
  Mobile:['010000000',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(11),Validators.minLength(11)]],
  Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]]
})
  }

  login(){
    if(this.formLogin.valid)
    {
      console.log(JSON.stringify(this.formLogin.value));
      let email:string=this.formLogin.controls['Email'].value;
      localStorage.setItem("email",email);
      alert(1);
      this._userService.setloggedStatus(true);
    }

  }

}
