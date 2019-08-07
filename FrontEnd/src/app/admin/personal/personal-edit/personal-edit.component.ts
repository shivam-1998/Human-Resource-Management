import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { UserserviceService } from 'src/app/userservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.css']
})
export class PersonalEditComponent implements OnInit {
  registerForm: FormGroup;
  personal;
  constructor(private router: Router, private emp: EmployeeService, private user: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      emp_name: new FormControl(null),
      email: new FormControl(null),
      contact_no: new FormControl(null),
      dob: new FormControl(null),
      address: new FormControl(null),
      pan_no: new FormControl(null),
      em_contact_no: new FormControl(null),
      em_contact_name: new FormControl(null),
      marital_status: new FormControl(null),
      skills: new FormControl(null),
      hobbies: new FormControl(null),
    });
    //personal
    this.route.params.subscribe(params => {
      this.user.viewpersonal(params['Id']).subscribe(res => {
        this.personal = res['results']

        this.registerForm.setValue({
          emp_name: this.personal.emp_name,
          email: this.personal.email,
          contact_no: this.personal.contact_no,
          dob: this.personal.dob.slice(0,10),
          address: this.personal.address,
          pan_no: this.personal.pan_no,
          em_contact_no: this.personal.em_contact_no,
          em_contact_name: this.personal.em_contact_name,
          marital_status: this.personal.marital_status,
          skills: this.personal.skills,
          hobbies: this.personal.hobbies,

        })
      })
    })
  }

  update() {
    const data = this.registerForm.value
    this.route.params.subscribe(params => {
      this.emp.updatePesronal(data, params['Id']).subscribe(res => {
          this.router.navigate(['edit/',params['Id']])
      })
    })
  }
}


