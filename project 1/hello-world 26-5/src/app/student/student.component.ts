import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
    selector:'student', //<student></student>
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
    // template:`Hello from
    //  student
     
    //  component.`
})
export class StudentComponent{
    student:Student=new Student();
    students:Student[]=[];
    constructor(){
    }
    getFullName():string
    {
        let fullName="ddd";
        return this.student.firstName+' '+this.student.lastName;
    }
    changeLastName()
    {
        this.student.lastName="Mostafa";
    }
    changeFisrtName(newFirstName:string)
    {
        this.student.firstName=newFirstName;
    }


}