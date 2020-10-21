import { Component } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

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
    courses:string[]=['C#','Java','Angular'];
    constructor(private studentService:StudentService){
        this.student.imageURL="/assets/1.jpg";
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

    incrementAge()
    {
        this.student.age++;
    }
    decrementAge()
    {
        this.student.age--;
    }
    invalidAge():boolean
    {
return this.student.age>30;
    }


}