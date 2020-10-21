import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name:string="Mohamed";
  constructor() { }

  ngOnInit() {
  }

  changeName(){
    this.name="Ahmed";
  }
  
  changeName2(newName:string){
    this.name=newName;
  }


}
