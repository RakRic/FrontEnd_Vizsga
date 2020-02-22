import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { JobSeeker } from '../classes/jobseeker';

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.css']
})
export class JobseekersComponent implements OnInit {

  jobseekers : JobSeeker[];
  searchTerm: string;

  constructor(private rs: RestService) { }

  ngOnInit(): void {
   this.rs.getJobSeekers().subscribe((data: any [])=>{
     this.jobseekers = data;
   });
  }
}


