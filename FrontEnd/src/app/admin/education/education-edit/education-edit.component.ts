import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {
  registerForm:FormGroup
  education;
  constructor(private router:Router,private emp:EmployeeService,private user:UserserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
     this.registerForm = new FormGroup({
      institute_name: new FormControl(null),
      degree: new FormControl(null),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
    })
     //education
    this.route.params.subscribe(params => {
      this.user.vieweducation(params['Id']).subscribe(result => {
        this.education = result['results']
        this.registerForm.setValue({
          institute_name: this.education.institute_name,
          degree: this.education.degree,
          start_date: this.education.start_date.slice(0,10),
          end_date: this.education.end_date.slice(0,10),
        })
      })
    })
  }

  update() {
    const data = this.registerForm.value
    this.route.params.subscribe(params => {
      this.emp.updateEducation(data, params['Id']).subscribe(res => {
        this.router.navigate(['edit/',params['Id']])
      })
    })
  }

}
