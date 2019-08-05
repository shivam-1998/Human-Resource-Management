import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) { }
  //addPersonaldata
  addPersonaldata(data){
    return this.http.post<any>("http://localhost:3300/personaldetails",data)
  }
  //addEducationaldata
  addEducationaldata(data){
    return this.http.post<any>('http://localhost:3300/education',data)
  }
  //addFamilydata
  addFamilydata(data){
    return this.http.post<any>('http://localhost:3300/family',data)
  }
  //addProfessionaldata
  addProfessionaldata(data){
    return this.http.post<any>('http://localhost:3300/professional',data)
  }
}
