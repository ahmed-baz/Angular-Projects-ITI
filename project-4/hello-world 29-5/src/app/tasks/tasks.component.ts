import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskData } from '@angular/core/src/testability/testability';
import { TaskService } from './task.service';
import { HttpClient } from '@angular/common/http';

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
  constructor(private taskService:TaskService,
    private _httpClient:HttpClient
    ) { }

  ngOnInit() {
    // this._httpClient.get("http://api.mohamed-sadek.com/task/get").subscribe(
      this.taskService.getAllTasks().subscribe(
     response=>{
       this.tasks=response as Task[];
       //alert(1);
     }
    ,error=>{}
    ,()=>{});
   //alert(2);
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
   
    this._httpClient.post("http://api.mohamed-sadek.com/task/post",task).subscribe(
      response=>{
        let id=response as number;
        task.ID=id;
        this.tasks.push(task);
      },
      error=>{}
      );
   }
   else
   {
     alert("Sorry already exists");
   }

  }
  delete(index:number)
  {
    let task=this.tasks[index];
    task.IsDeleting=true;
    this._httpClient.delete(`http://api.mohamed-sadek.com/task/delete/${task.ID}`).subscribe(
      response=>{
        this.tasks.splice(index,1);
      }
     ,error=>{}
     ,()=>{task.IsDeleting=false;});
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
