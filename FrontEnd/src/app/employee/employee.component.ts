import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  personal;
  education;
  profesional;
  family;
  constructor(private router:Router,private userservice:UserserviceService) { }

  ngOnInit() {
    this.viewpersonal();
    this.vieweducation();
    this.viewprofessional();
    this.viewfamily();
  }

  viewpersonal(){
    const id = localStorage.getItem("emp_id")
    this.userservice.viewpersonal(id).subscribe(res=>{
      this.personal = res['results'];
      console.log(this.personal);
    })
  }

  vieweducation(){
    const id = localStorage.getItem("emp_id")
    this.userservice.vieweducation(id).subscribe(res=>{
      this.education = res['results'];
      console.log(this.education);
    })
  }
  viewprofessional(){
    const id = localStorage.getItem("emp_id")
    this.userservice.viewprofessional(id).subscribe(res=>{
      this.profesional = res['results'];
      console.log(this.profesional);
    })
  }
  viewfamily(){
    const id = localStorage.getItem("emp_id")
    this.userservice.viewfamily(id).subscribe(res=>{
      this.family = res['results'];
      console.log(this.family);
    })
  }

}
