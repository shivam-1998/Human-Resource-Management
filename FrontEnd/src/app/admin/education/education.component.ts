import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  registerForm:FormGroup
  constructor(private auth:AuthService,private router:Router,private empservice:EmployeeService) {
    this.registerForm = new FormGroup({
      institute_name : new FormControl(null,[Validators.required]),
      degree : new FormControl(null,[Validators.required]),
      start_date : new FormControl(null,[Validators.required,Validators.email]),
      end_date : new FormControl(null,[Validators.required]),
     }); 
   }

  ngOnInit() {
  }

  EducationDetails(){
    const data = this.registerForm.value
    this.empservice.addEducationaldata(data).subscribe(emp=>{
      console.log(emp);
      
    })
  }

}
