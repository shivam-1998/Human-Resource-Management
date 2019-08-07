import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  
  //addPersonaldata
  addPersonaldata(data) {
    
    return this.http.post<any>(`${Url.url}/personaldetails`, data)
  }

  //addEducationaldata
  addEducationaldata(data) {
    return this.http.post<any>(`${Url.url}/education`, data)
  }

  //addFamilydata
  addFamilydata(data) {
    return this.http.post<any>(`${Url.url}/family`, data)
  }

  //addProfessionaldata
  addProfessionaldata(data) {
    return this.http.post<any>(`${Url.url}/professional`, data)
  }

  //viewemployeelist
  viewEmployeeList() {
    return this.http.get(`${Url.url}/viewemployees`)
  }

  //updatepersonal
  updatePesronal(data, id) {
    return this.http.patch(`${Url.url}/updatepersonal/` + id, data);
  }

  //updateeducation
  updateEducation(data, id) {
    return this.http.patch(`${Url.url}/updateeducation/` + id, data);
  }

  //updateprofessional
  updateProfessional(data, id) {
    return this.http.patch(`${Url.url}/updateprofessional/` + id, data);
  }

  //updatepersonal
  updateFamily(data, id) {
    return this.http.patch(`${Url.url}/updatefamily/` + id, data);
  }

  //viewleaves
  viewleaves(): Observable<any> {
    return this.http.get(`${Url.url}/viewleaves`)
  }
  
  //show next 5 days leaves
  showleaves(): Observable<any> {
    return this.http.get(`${Url.url}/viewleaves`)
  }

}
