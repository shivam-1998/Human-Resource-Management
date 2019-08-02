import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  registerForm:FormGroup

  constructor(private router:Router,private auth:AuthService) {
    this.registerForm = new FormGroup({
      name : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      relation : new FormControl(null,Validators.required),
      occupation : new FormControl(null,Validators.required),
      phone_no : new FormControl(null,Validators.required),
     }); 
   }

  ngOnInit() {
  }

}
