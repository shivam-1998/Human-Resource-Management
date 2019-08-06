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
import { EditComponent } from './admin/edit/edit.component';
import { PersonalEditComponent } from './admin/personal/personal-edit/personal-edit.component';
import { EducationEditComponent } from './admin/education/education-edit/education-edit.component';
import { ProfessionalEditComponent } from './admin/professional/professional-edit/professional-edit.component';
import { FamilyEditComponent } from './admin/family/family-edit/family-edit.component';

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
      { path: 'edit/:Id', component: EditComponent },
      { path: 'personaledit/:Id', component: PersonalEditComponent },
      { path: 'educationedit/:Id', component: EducationEditComponent },
      { path: 'professionaledit/:Id', component: ProfessionalEditComponent },
      { path: 'familyedit/:Id', component: FamilyEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
