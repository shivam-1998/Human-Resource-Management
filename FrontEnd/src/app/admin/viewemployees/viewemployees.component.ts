import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.css']
})
export class ViewemployeesComponent implements OnInit {
  empdata = [];
  constructor(private router: Router, private empservice: EmployeeService,private user:UserserviceService) { }

  ngOnInit() {
    this.fetchdata();
  }

  fetchdata() {
    this.empservice.viewEmployeeList().subscribe(empdata => {
      this.empdata = empdata['result']
    })
  }

  edit(id) {
     this.router.navigate(['edit/'+id])
  }
  filter(change){
    console.log(change.value);
    if(change.value == 'current'){
      this.user.current().subscribe(current =>{
         this.empdata = current['results']  
      }) 
    }else if(change.value =='left'){
      this.user.left().subscribe(left =>{
         this.empdata = left['results']
      })
    }else{
      this.fetchdata();
    }
    
  }

}
