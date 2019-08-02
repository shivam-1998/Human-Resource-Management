import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  registerForm : FormGroup;
  
  constructor(private auth:AuthService,private router:Router) { 
    this.registerForm = new FormGroup({
      c_name : new FormControl(null,[Validators.required]),
      designation : new FormControl(null,[Validators.required]),
      join_date : new FormControl(null,[Validators.required]),
      revealing_date : new FormControl(null,[Validators.required]),
      status : new FormControl(null,[Validators.required]),
      department : new FormControl(null,Validators.required),
     }); 
  }

  ngOnInit() {
  }

}
