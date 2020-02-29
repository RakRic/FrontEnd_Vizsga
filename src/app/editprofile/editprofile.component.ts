import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { JobSeeker } from '../classes/jobseeker';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditProfileComponent implements OnInit {
  jobseekers : JobSeeker[];
  actualSelectedJobSeeker : JobSeeker;


  constructor(private rs: RestService,
              private location: Location,
              private router: Router) { }

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

  onSubmit(name : string, id : string, desc : string, age: number, city: string, country: string, phonenumber: string, zipcode: string, gender: string) : void {
    var jobseeker = this.jobseekers.filter(js => js.id.toString() === id)[0];
    jobseeker.firstname = name.substring(0, name.indexOf(" "));
    jobseeker.lastname = name.slice(name.indexOf(" ") + 1);
    jobseeker.description = desc;
    jobseeker.age = age;
    jobseeker.city = city;
    jobseeker.country = country;
    jobseeker.phonenumber = phonenumber;
    jobseeker.zipcode = zipcode;
    jobseeker.gender = gender;
    this.rs.updateJobSeekerNameById(jobseeker);
    this.router.navigate(['jobseekers']);
  }
  
  onNameSelect(name : string) : void {
    var id = name.substring(0, name.indexOf(" "));
    this.actualSelectedJobSeeker = this.jobseekers.filter(js => js.id.toString() === id)[0];
  }

  goBack() {
    this.location.back();
  }
}
