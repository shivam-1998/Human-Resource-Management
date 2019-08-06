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
      start_date : new FormControl(null,Validators.required),
      end_date : new FormControl(null,[Validators.required]),
      emp_id:new FormControl(localStorage.getItem("user_id"))
     }); 
   }

  ngOnInit() {
    const temp = localStorage.getItem("temp")
    if(temp!=="true"){
      this.router.navigate(["admin/personal"])     
    }
  }

  EducationDetails(){
    console.log(this.registerForm.value);
    
    this.empservice.addEducationaldata(this.registerForm.value).subscribe(emp=>{
      console.log(emp);
      localStorage.removeItem("temp");
      localStorage.setItem("temp1","true");
      this.router.navigate(['admin/professional']);
      
    })
    // this.router.navigate(['admin']);
  }

}
