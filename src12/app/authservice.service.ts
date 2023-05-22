import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor() { }

  users:any[]=[
  {
    "userId":1,
    "email":"akshay123@gmail.com",
    "password":"password",
    "role":"employee"
  },
  {
    "userId":2,
    "email":"sahil123@gmail.com",
    "password":"password",
    "role":"employee"
  },
  {
    "userId":3,
    "email":"hrushi123@gmail.com",
    "password":"password",
    "role":"employee"
  },
  {
    "userId":4,
    "email":"ravitambade123@hmail.com",
    "password":"password",
    "role":"Manager"
  }
];

  logIn(email:string,password:string):boolean{
    const user=this.users.find((u)=>u.email ===email && u.password===password)
    if(user){
      localStorage.setItem("role",user.role);
       return true;
    }
    return false;
  }
}






