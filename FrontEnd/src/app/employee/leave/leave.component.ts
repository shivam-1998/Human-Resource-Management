import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  registerForm:FormGroup

  constructor(private router:Router,private user:UserserviceService ) {
    this.registerForm = new FormGroup({
     leave_start_date : new FormControl(null,Validators.required),
      leave_end_date : new FormControl(null,Validators.required),
      reason : new FormControl(null,Validators.required),
      leave_type:new FormControl(null,Validators.required)
     }); 
   }

  ngOnInit() {
  }

  addleave(){
    const data =  this.registerForm.value
     data.emp_id = localStorage.getItem('emp_id')      
    this.user.addleave(data).subscribe(res=>{
      this.router.navigate(['employee']);
    })
  }


}
