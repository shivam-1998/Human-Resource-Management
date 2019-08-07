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
  loginForm: FormGroup;
  msg = null;

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {

    const data = this.loginForm.value
    
    this.auth.loginUser(data).subscribe(res => {
      localStorage.setItem('token', res["token"])
      localStorage.setItem('emp_id', res["emp_id"])
      if (res["role"] == 'HR') {
        this.router.navigate(['/admin'])
      } else {
        this.router.navigate(['/employee'])
      }
    },
      err => {
        console.log(err);
        this.msg = err.error
      }
    );
  }
}
