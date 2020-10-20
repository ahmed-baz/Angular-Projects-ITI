import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskData } from '@angular/core/src/testability/testability';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  name:string="Mohamed Ali";
  tasks:Task[]=[];
  date:Date=new Date();
  //taskService:TaskService=new TaskService();
  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }
  getPendingTasks():number
  {
    return this.tasks.filter(task=>!task.Done).length;
  }
  add(title:string)
  {
   let isExist=this.taskService.isExist(title,this.tasks);
   if(!isExist)
   {
    let task:Task=new Task();
    task.Title=title;
    this.tasks.push(task);
   }
   else
   {
     alert("Sorry already exists");
   }

  }
  delete(index:number)
  {
    this.tasks.splice(index,1);
  }
  update(task:Task)
  {
    task.Done=!task.Done;
    // if(task.Done==true)
    // task.Done=false;
    // else
    // task.Done=true;
  }

}
