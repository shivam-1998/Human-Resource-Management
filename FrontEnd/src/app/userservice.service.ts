import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
 //viewpersonal
  viewpersonal(id){
   return this.http.get("http://localhost:3300/viewpersonaldata/"+id)
  }
  //vieweducation
  vieweducation(id){
   return this.http.get("http://localhost:3300/vieweducationdata/"+id)
  }
  //viewprofessional
  viewprofessional(id){
   return this.http.get("http://localhost:3300/viewprofessionaldata/"+id)
  }
  //viewfamily
  viewfamily(id){
   return this.http.get("http://localhost:3300/viewfamilydata/"+id)
  }
  //add leave
  addleave(data,emp_id){
    return this.http.post("http://localhost:3300/leave",data,emp_id);
  }
  //current
  current(){
    return this.http.get('http://localhost:3300/currentemp');
  }
  // left
  left(){
    return this.http.get('http://localhost:3300/leftemp');
  }


  
}
