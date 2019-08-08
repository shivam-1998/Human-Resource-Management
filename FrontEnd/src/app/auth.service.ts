import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Url } from "../url";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient ,private router:Router) { }

loginUser(user){ 
  return this.http.post(`${Url.url}/login`,user)
}

getToken(){
  return localStorage.getItem('token');
}

logoutUser(){
  localStorage.removeItem('token')
  localStorage.removeItem('emp_id')
  localStorage.removeItem('user')
  this.router.navigate(['login']);
}

loggedIn(){
  return !!localStorage.getItem('token');
}


}
  