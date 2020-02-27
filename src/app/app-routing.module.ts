import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { EditProfileComponent } from './editprofile/editprofile.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { CompanyComponent } from './company/company.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { LoginComponent } from './log-in/log-in.component';
import { AuthGuard } from './_helpers/auth.guard';
import { AddprofileComponent } from './addprofile/addprofile.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard] },
  { path: 'editprofile', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'addprofile', component: AddprofileComponent, canActivate: [AuthGuard] },
  { path: 'jobseekers', component: JobseekersComponent, canActivate: [AuthGuard] },
  { path: 'company/:id', component: CompanyComponent, canActivate: [AuthGuard] },
  { path: 'jobseeker/:id', component: JobseekerComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
