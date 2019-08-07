import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
