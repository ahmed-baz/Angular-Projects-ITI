import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLogged=new Subject<boolean>();
  constructor() { 
    this.setloggedStatus(false);
  }
  setloggedStatus(status:boolean)
  {
    this.userLogged.next(status)
  }
  getloggedStatus()
  {
    //return true;
   return this.userLogged.asObservable();
  }
}
