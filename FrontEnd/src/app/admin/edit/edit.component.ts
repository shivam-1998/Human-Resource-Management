import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { UserserviceService } from '../../userservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(private router: Router, private emp: EmployeeService, private user: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  editpersonal(){
    this.route.params.subscribe(params=>{
      this.router.navigate(['personaledit',params['Id']])
    })
  }
  editeducation(){
    this.route.params.subscribe(params=>{
      this.router.navigate(['educationedit',params['Id']])
    })
  }
  editprofessional(){
    this.route.params.subscribe(params=>{
      this.router.navigate(['professionaledit',params['Id']])
    })
  }
  editfamily(){
    this.route.params.subscribe(params=>{
      this.router.navigate(['familyedit',params['Id']])
    })
  }
}
