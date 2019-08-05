import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  viewpersonal(){
    this.http.get<any>("http://localhost:3300/viewpersonaldata")
  }
  
  vieweducation(){
    this.http.get("http://localhost:3300/vieweducationdata")
  }
  
  viewprofessional(){
    this.http.get("http://localhost:3300/viewprofessionaldata")
  }
  
  viewfamily(){
    this.http.get("http://localhost:3300/viewfamilydata")
  }
  
}
