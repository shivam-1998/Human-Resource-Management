import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  x;
  constructor(private router: Router, private empservice: EmployeeService) { }

  ngOnInit() {
    this.x = localStorage.getItem("user_id")

  }
  add_p() {
    this.router.navigate(['admin/personal']);
  }
  add_E() {
    this.router.navigate(['admin/education']);
  }

  add_F() {
    this.router.navigate(['admin/family']);
  }

  add_Pr() {
  this.router.navigate(['admin/family']);
  }

}
