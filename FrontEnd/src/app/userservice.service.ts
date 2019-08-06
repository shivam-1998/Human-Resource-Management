import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  viewpersonal(id){
   return this.http.get("http://localhost:3300/viewpersonaldata/"+id)
  }
  
  vieweducation(id){
   return this.http.get("http://localhost:3300/vieweducationdata/"+id)
  }
  
  viewprofessional(id){
   return this.http.get("http://localhost:3300/viewprofessionaldata/"+id)
  }
  
  viewfamily(id){
   return this.http.get("http://localhost:3300/viewfamilydata/"+id)
  }
  
}
