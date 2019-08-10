import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private empservice: EmployeeService, private user: UserserviceService) { }

  ngOnInit() {
  }

  
}
