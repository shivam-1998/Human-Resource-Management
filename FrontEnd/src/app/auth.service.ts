import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "http://localhost:3300/login";

  constructor(private http:HttpClient ,private router:Router) { }

loginUser(user){
  return this.http.post<any>(this._loginUrl,user)
}

getToken(){
  return localStorage.getItem('token');
}

loggedIn(){
  return !!localStorage.getItem('token');
}


}
  