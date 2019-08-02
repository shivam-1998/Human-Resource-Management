import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  registerForm:FormGroup
  constructor(private auth:AuthService,private router:Router,private empservice:EmployeeService) { 
    this.registerForm = new FormGroup({
      emp_name : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required]),
      contact_no : new FormControl(null,[Validators.required]),
      address : new FormControl(null,[Validators.required]),
      dob : new FormControl(null,Validators.required),
      pan_no : new FormControl(null,Validators.required),
      em_contact_no : new FormControl(null,Validators.required),
      em_contact_name : new FormControl(null,Validators.required),
      marital_status : new FormControl(null,Validators.required),
      skills : new FormControl(null,Validators.required),
      hobbies : new FormControl(null,Validators.required),
      role : new FormControl(null,Validators.required),
     });  
  }

  ngOnInit() {
  }

  PersonalDetails(){
    const data =  this.registerForm.value
    console.log(data);
    this.empservice.addPersonaldata(data).subscribe(emp =>{
        console.log(emp);
        
    })
    
    
  }

}
