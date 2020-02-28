import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ROUTING
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { EditProfileComponent } from './editprofile/editprofile.component';
import { CompanyComponent } from './company/company.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { LoginComponent } from './log-in/log-in.component';
// Http, Service
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestService } from './Services/rest.service';
//PIPES
import { CompanyFilterPipe } from './companies/companies-filter.pipe';
import { JobseekerFilterPipe } from './jobseekers/jobseekers-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Materials
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule
} from '@angular/material';
//Bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Angular Layout
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { fakeBackendProvider } from './_helpers/fake-backend';

// Helpers
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor  } from './_helpers/jwt.interceptor';
import { AddprofileComponent } from './addprofile/addprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    HomeComponent,
    CompaniesComponent,
    JobseekersComponent,
    EditProfileComponent,
    CompanyFilterPipe,
    JobseekerFilterPipe,
    CompanyComponent,
    JobseekerComponent,
    LoginComponent,
    AddprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
    FlexLayoutModule,
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true  },
    fakeBackendProvider,
     RestService
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
