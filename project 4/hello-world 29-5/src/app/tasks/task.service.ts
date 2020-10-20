import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class TaskService{
    
    constructor(private _httpClient:HttpClient){}
    isExist(title:string,tasks:Task[]):boolean
    {
        return tasks.some(task=>task.Title==title && !task.Done);
    }
    getAllTasks(){
       return this._httpClient.get(`${environment.api_URL}/task/get`);
    }
    get(id:number){
        return this._httpClient.get(`${environment.api_URL}/task/get/${id}`);
     }
     delete(id:number){
        return this._httpClient.delete(`${environment.api_URL}/task/delete/${id}`);
     }
     post(task:Task){
        return this._httpClient.post(`${environment.api_URL}/task/post`,task);
     }
}