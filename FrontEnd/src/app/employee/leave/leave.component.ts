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
      start_date : new FormControl(null,Validators.required),
      end_date : new FormControl(null,Validators.required),
      reason : new FormControl(null,Validators.required),
     }); 
   }

  ngOnInit() {
  }

  addleave(){
    const data =  this.registerForm.value
    this.user.addleave(data).subscribe(res=>{
      this.router.navigate(['employee']);
    })
  }

}
