import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private auth:AuthService,private router:Router) { 
    
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,[Validators.required,Validators.minLength(4)])
    });
  }
  
  onSubmit(){
    console.log("hi");
    
    const data =  this.loginForm.value
    console.log(data);
    
      this.auth.loginUser(data).subscribe(res=>{
         localStorage.setItem('token',res.token)
         this.router.navigate(['/home'])
      },
      err => console.log(err)
      );
  }
}
