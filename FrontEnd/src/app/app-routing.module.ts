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
import { LeaveComponent } from './employee/leave/leave.component';
import { LeaveSchedulesComponent } from './admin/leave-schedules/leave-schedules.component';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'employee', component: EmployeeComponent, canActivate: [AuthguardService],data: {role: 'EMPLOYEE'} },
  { path: 'leave', component: LeaveComponent,canActivate:[AuthguardService],data: {role: 'EMPLOYEE'} },

  { path: 'admin', component: AdminComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'personal', component: PersonalComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'education', component: EducationComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'family', component: FamilyComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'professional', component: ProfessionalComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'employeelist', component: ViewemployeesComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'edit/:Id', component: EditComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'personaledit/:Id', component: PersonalEditComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'educationedit/:Id', component: EducationEditComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'professionaledit/:Id', component: ProfessionalEditComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'familyedit/:Id', component: FamilyEditComponent, canActivate: [AuthguardService],data: {role: 'HR'} },
  { path: 'viewleaves', component: LeaveSchedulesComponent, canActivate: [AuthguardService],data: {role: 'HR'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
