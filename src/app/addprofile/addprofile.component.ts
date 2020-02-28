import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { JobSeeker } from '../classes/jobseeker';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
  jobseeker: JobSeeker[];
  addedJobSeeker: any;

  profileForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    description: [''],
    age: [''],
    city: [''],
    country: [''],
    phonenumber: [''],
    gender: [''],
    zipcode: [''],
    programming_skills: ['']
  })

  constructor(private rs: RestService,
              private fb: FormBuilder,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
  }

  addJobSeeker() {
    var split = this.profileForm.value.programming_skills.split(" ");
    var ps = [];
    for(var i = 0; i < split.length; i++)
    {
      ps.push({"name" : split[i]});
    }
    this.profileForm.value.programming_skills = ps;
    this.rs.addJobSeeker(this.profileForm.value).subscribe();
    this.router.navigate(['jobseekers']);
  }

  goBack() {
    this.location.back();
  }
  


}
