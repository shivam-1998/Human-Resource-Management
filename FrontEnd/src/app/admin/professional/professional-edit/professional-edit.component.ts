import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-professional-edit',
  templateUrl: './professional-edit.component.html',
  styleUrls: ['./professional-edit.component.css']
})
export class ProfessionalEditComponent implements OnInit {
  registerForm: FormGroup;
  professional;
  constructor(private router: Router,private user: UserserviceService,private emp:EmployeeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      c_name: new FormControl(null),
      designation: new FormControl(null),
      join_date: new FormControl(null),
      revealing_date: new FormControl(null),
      status: new FormControl(null),
      dept_name: new FormControl(null),
    });

    //profeesional
    this.route.params.subscribe(params => {
      this.user.viewprofessional(params['Id']).subscribe(result => {
        this.professional = result['results']
        this.registerForm.setValue({
          c_name: this.professional.c_name,
          designation: this.professional.designation,
          join_date: this.professional.join_date.slice(0,10),
          revealing_date: this.professional.revealing_date,
          status: this.professional.status,
          dept_name: this.professional.dept_name
        })
      })
    })
  }

  update() {
    const data = this.registerForm.value
    this.route.params.subscribe(params => {
      this.emp.updateProfessional(data, params['Id']).subscribe(res => {      
        this.router.navigate(['edit/',params['Id']])
      })
    })
  }

}
