import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  registerForm:FormGroup

  constructor(private router:Router,private auth:AuthService,private empservice:EmployeeService) {
    this.registerForm = new FormGroup({
      name : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      relation : new FormControl(null,Validators.required),
      occupation : new FormControl(null,Validators.required),
      phone_no : new FormControl(null,Validators.required),
      emp_id:new FormControl(localStorage.getItem("user_id"))
     }); 
   }

  ngOnInit() {
    const temp = localStorage.getItem("temp2")
    if(temp!=="true"){
      this.router.navigate(["admin/professional"])     
    }
  }

  FamilyDetails(){
     this.empservice.addFamilydata(this.registerForm.value).subscribe(emp => {
        console.log(emp);
        localStorage.removeItem("user_id")
        localStorage.removeItem("temp2");  
        this.router.navigate(['admin']);      
     })
  }

}
