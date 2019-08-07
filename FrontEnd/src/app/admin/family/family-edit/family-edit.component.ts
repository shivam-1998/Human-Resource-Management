import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-family-edit',
  templateUrl: './family-edit.component.html',
  styleUrls: ['./family-edit.component.css']
})
export class FamilyEditComponent implements OnInit {
  registerForm: FormGroup;
  family;
  constructor(private router: Router, private emp: EmployeeService, private user: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null),
      relation: new FormControl(null),
      occupation: new FormControl(null),
      phone_no: new FormControl(null),
    });
    //family
    this.route.params.subscribe(params => {
      this.user.viewfamily(params['Id']).subscribe(result => {
        this.family = result['results'];
        this.registerForm.setValue({
          name: this.family.name,
          relation: this.family.relation,
          occupation: this.family.occupation,
          phone_no: this.family.phone_no,
        })
      })
    })

  }
  update() {
    const data = this.registerForm.value
    this.route.params.subscribe(params => {
      this.emp.updateFamily(data, params['Id']).subscribe(res => {      
        this.router.navigate(['edit/',params['Id']])
      })
    })
  }

}
