import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { JobSeeker } from '../classes/jobseeker';
import { FormBuilder } from '@angular/forms';

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
    age: ['']
  })

  constructor(private rs: RestService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.getJobSeekersFromService()
  }

  // getJobSeekersFromService():void {
  //   this.rs.getJobSeekers().subscribe(added => this.jobseeker = updatedJs);
  // }


}
