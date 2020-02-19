import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { CompanyComponent } from './company/company.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { pathMatch: 'full', path: "", component: HomeComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'jobseekers', component: JobseekersComponent },
  { path: 'company/:id', component: CompanyComponent },
  { path: 'jobseeker/:id', component: JobseekerComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
