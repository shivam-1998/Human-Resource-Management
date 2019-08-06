import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { empdata } from "src/app/model/empdata";

@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.css']
})
export class ViewemployeesComponent implements OnInit {
  empdata = [];
  constructor(private router: Router, private empservice: EmployeeService) { }

  ngOnInit() {
    this.fetchdata();
  }

  fetchdata() {
    this.empservice.viewEmployeeList().subscribe(empdata => {
      console.log(empdata['result']);
      this.empdata = empdata['result']
    })
  }

  edit(id) {
     this.router.navigate(['admin/edit/',+id])
  }

}
