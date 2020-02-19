import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Users } from '../classes/user';
import { Company } from '../classes/company';
import { Observable, pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { JobSeeker } from '../classes/jobseeker';
import { ProgrammingSkills } from '../classes/programmingSkills';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class RestService {

  companies: Company[];
  jobseekers: JobSeeker[];

  constructor(private http: HttpClient) {}

  jobseekersUrl : string = "http://localhost:3000/jobseekers/"
  companiesUrl: string = "http://localhost:3000/companies/"
  programmingskillsUrl: string = "http://localhost:3000/programming_skills/"

  getJobSeekers(): Observable<JobSeeker[]>
  {
    return this.http.get<JobSeeker[]>(this.jobseekersUrl, httpOptions);
  }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(this.companiesUrl, httpOptions);
  }

  getCompanyById(id): Observable<Company> {
    return this.http.get<Company>(`${this.companiesUrl}/${id}`, httpOptions);
  }

  getJobseekerById(id): Observable<JobSeeker> {
    return this.http.get<JobSeeker>(`${this.jobseekersUrl}/${id}`, httpOptions);
  }

  getProgrammingSkills(): Observable<ProgrammingSkills[]> {
    return this.http.get<ProgrammingSkills[]>(this.programmingskillsUrl, httpOptions)
  }

  // deleteCompanyById(id): Observable<Companies[]>{
  //   return this.http.delete<Companies[]>(`${this.url2}/${id}`, httpOptions)

  // }
}
