import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router:Router,private userservice:UserserviceService) { }

  ngOnInit() {
  }

  viewpersonal(){
    this.userservice.viewpersonal().
  }

}
