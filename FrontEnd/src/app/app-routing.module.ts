import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './admin/personal/personal.component';
import { EducationComponent } from './admin/education/education.component';
import { FamilyComponent } from './admin/family/family.component';
import { ProfessionalComponent } from './admin/professional/professional.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewemployeesComponent } from './admin/viewemployees/viewemployees.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'personal', component: PersonalComponent}, 
      { path: 'education', component: EducationComponent },
      { path: 'family', component: FamilyComponent },
      { path: 'professional', component: ProfessionalComponent },
      { path: 'employeelist', component: ViewemployeesComponent },
      { path: 'edit', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
