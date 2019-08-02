import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addPersonaldata(data){
    return this.http.post<any>("http://localhost:3300/personaldetails",data)
  }

}
