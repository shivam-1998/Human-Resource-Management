import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdashboard',
  templateUrl: './viewdashboard.component.html',
  styleUrls: ['./viewdashboard.component.css']
})
export class ViewdashboardComponent implements OnInit {
  personal;
  education;
  profesional;
  family;
  constructor(private router: Router, private empservice: EmployeeService, private user: UserserviceService) { }

  ngOnInit() {
    this.viewpersonal();
    this.vieweducation();
    this.viewprofessional();
    this.viewfamily();
  }

  viewpersonal() {
    const id = localStorage.getItem("emp_id")
    this.user.viewpersonal(id).subscribe(res => {
      this.personal = res['results'];
      console.log(res['results']);
      
    })
  }

  vieweducation() {
    const id = localStorage.getItem("emp_id")
    this.user.vieweducation(id).subscribe(res => {
      this.education = res['results'];
    })
  }
  viewprofessional() {
    const id = localStorage.getItem("emp_id")
    this.user.viewprofessional(id).subscribe(res => {
      this.profesional = res['results'];
    })
  }
  viewfamily() {
    const id = localStorage.getItem("emp_id")
    this.user.viewfamily(id).subscribe(res => {
      this.family = res['results'];
    })
  }
}
