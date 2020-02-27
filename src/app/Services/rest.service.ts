import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../classes/user';
import { Company } from '../classes/company';
import { Observable, pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { JobSeeker } from '../classes/jobseeker';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class RestService {

  companies: Company[];
  jobseekers: JobSeeker[];

  constructor(private http: HttpClient) { }

  jobseekersUrl: string = "http://localhost:3000/jobseekers/"
  companiesUrl: string = "http://localhost:3000/companies/"

  // Get
  getJobSeekers(): Observable<JobSeeker[]> {
    return this.http.get<JobSeeker[]>(this.jobseekersUrl, httpOptions);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl, httpOptions);
  }
  // Get By Id
  getCompanyById(id): Observable<Company> {
    return this.http.get<Company>(`${this.companiesUrl}/${id}`, httpOptions);
  }

  getJobseekerById(id): Observable<JobSeeker> {
    return this.http.get<JobSeeker>(`${this.jobseekersUrl}/${id}`, httpOptions);
  }
  // Delete By Id
  deleteCompanyById(id): Observable<Company[]> {
    return this.http.delete<Company[]>(`${this.companiesUrl}/${id}`, httpOptions)

  }

  deleteJobseekerById(id): Observable<JobSeeker[]> {
    return this.http.delete<JobSeeker[]>(`${this.jobseekersUrl}/${id}`, httpOptions)
  }

  //Put
  updateJobSeekerNameById(data): Observable<JobSeeker> {
    console.log("meghivva");
    var x = this.http.put<JobSeeker>(`${this.jobseekersUrl}/${data.id}`, JSON.stringify(data), httpOptions);
    x.subscribe(d => console.log(d));
    return x;
  }
}
