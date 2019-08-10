import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthguardService } from './authguard.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { PersonalComponent } from './admin/personal/personal.component';
import { EducationComponent } from './admin/education/education.component';
import { FamilyComponent } from './admin/family/family.component';
import { ProfessionalComponent } from './admin/professional/professional.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewemployeesComponent } from './admin/viewemployees/viewemployees.component';
import { EditComponent } from './admin/edit/edit.component';
import { EducationEditComponent } from './admin/education/education-edit/education-edit.component';
import { PersonalEditComponent } from "./admin/personal/personal-edit/personal-edit.component";
import { FamilyEditComponent } from './admin/family/family-edit/family-edit.component';
import { ProfessionalEditComponent } from "./admin/professional/professional-edit/professional-edit.component";
import { LeaveComponent } from './employee/leave/leave.component';
import { LeaveSchedulesComponent } from './admin/leave-schedules/leave-schedules.component';
import { ViewdashboardComponent } from './viewdashboard/viewdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PersonalComponent,
    EducationComponent,
    FamilyComponent,
    ProfessionalComponent,
    AdminComponent,
    EmployeeComponent,
    ViewemployeesComponent,
    EditComponent,
    EducationEditComponent,
    FamilyEditComponent,
    ProfessionalEditComponent,
    PersonalEditComponent,
    LeaveComponent,
    LeaveSchedulesComponent,
    ViewdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthguardService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
