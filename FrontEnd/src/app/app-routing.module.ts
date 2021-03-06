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
import { ViewdashboardComponent } from './viewdashboard/viewdashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthguardService], data: { role: 'HR' }, children:
      [
        { path: '', redirectTo: 'viewdashboard', pathMatch: 'full' },
        { path: 'personal', component: PersonalComponent },
        { path: 'viewdashboard', component: ViewdashboardComponent },
        { path: 'education', component: EducationComponent },
        { path: 'family', component: FamilyComponent },
        { path: 'professional', component: ProfessionalComponent },
        { path: 'employeelist', component: ViewemployeesComponent },
        { path: 'edit/:Id', component: EditComponent },
        { path: 'personaledit/:Id', component: PersonalEditComponent },
        { path: 'educationedit/:Id', component: EducationEditComponent },
        { path: 'professionaledit/:Id', component: ProfessionalEditComponent },
        { path: 'familyedit/:Id', component: FamilyEditComponent },
        { path: 'viewleaves', component: LeaveSchedulesComponent }
      ]
  },

  {
    path: 'employee', component: EmployeeComponent, canActivate: [AuthguardService], data: { role: 'EMPLOYEE' }, children:
      [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'leave', component: LeaveComponent },
        { path: 'dashboard', component: ViewdashboardComponent },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
