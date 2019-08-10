import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-leave-schedules',
  templateUrl: './leave-schedules.component.html',
  styleUrls: ['./leave-schedules.component.css']
})
export class LeaveSchedulesComponent implements OnInit {
  leave = [];
  show = [];

  bool = false
  temp=false

  constructor(private router: Router, private emp: EmployeeService) { }

  ngOnInit() {
    this.bool=true
    //view todays leaves
    this.emp.viewleaves().subscribe(res => {
      this.leave = res['result']
    })

    //view next 5 days leaves
    this.emp.showleaves().subscribe(leaves => {
      this.show = leaves['result']
    })
  }
  filter() {
    this.bool = true
    this.temp=false
  }

  Show(){
    this.bool = false
    this.temp=true
  }

}
