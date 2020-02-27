import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RestService } from '../Services/rest.service';
import { JobSeeker } from '../classes/jobseeker';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  jobseekers : JobSeeker[];
  actualSelectedJobSeeker : JobSeeker;
    profileForm = this.fb.group({
      name: [''],
      email: ['']
    });


  constructor(private fb: FormBuilder,
    private rs: RestService) { }

  ngOnInit() {
    this.rs.getJobSeekers().subscribe(updatedJs => 
      {
        this.jobseekers = updatedJs;
        this.actualSelectedJobSeeker = this.jobseekers[0];
      });
  }

  getJobSeekersFromService():void {
    this.rs.getJobSeekers().subscribe(updatedJs => 
      {this.jobseekers = updatedJs;});
  }

  onSubmit(name : string, id : string, desc : string, age: number, city: string, country: string, phonenumber: number, zipcode: number) : void {
    var jobseeker = this.jobseekers.filter(js => js.id.toString() === id)[0];
    jobseeker.firstname = name.substring(0, name.indexOf(" "));
    jobseeker.lastname = name.slice(name.indexOf(" ") + 1);
    jobseeker.description = desc;
    jobseeker.age = age;
    jobseeker.city = city;
    jobseeker.country = country;
    jobseeker.phonenumber = phonenumber.toString();
    jobseeker.zipcode = zipcode.toString();
    this.rs.updateJobSeekerNameById(jobseeker);
  }
  onNameSelect(name : string) : void {
    var id = name.substring(0, name.indexOf(" "));
    this.actualSelectedJobSeeker = this.jobseekers.filter(js => js.id.toString() === id)[0];
  }
}
