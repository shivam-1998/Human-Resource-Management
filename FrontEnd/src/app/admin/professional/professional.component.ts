import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  registerForm : FormGroup;
  
  constructor(private auth:AuthService,private router:Router,private empservice:EmployeeService) { 
    this.registerForm = new FormGroup({
      c_name : new FormControl(null,[Validators.required]),
      designation : new FormControl(null,[Validators.required]),
      join_date : new FormControl(null,[Validators.required]),
      revealing_date : new FormControl(null,[Validators.required]),
      status : new FormControl(null,[Validators.required]),
      dept_name : new FormControl(null,Validators.required),
      emp_id:new FormControl(localStorage.getItem("user_id"))
     }); 
  }

  ngOnInit() {
    const temp = localStorage.getItem("temp1")
    if(temp!=="true"){
      this.router.navigate(["admin/education"])     
    }
  }

  ProfessionalDetails(){
      this.empservice.addProfessionaldata(this.registerForm.value).subscribe(emp=>{
      console.log(emp);
      localStorage.removeItem("temp1")
      localStorage.setItem("temp2","true");
      this.router.navigate(['admin/family']);
      
    })
    // this.router.navigate(['admin']);
  }

}
