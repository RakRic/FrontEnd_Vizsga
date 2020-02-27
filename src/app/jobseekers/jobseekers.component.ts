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

  ngOnInit() {
    this.getJobSeekersFromService()

  }

  getJobSeekersFromService():void {
    this.rs.getJobSeekers().subscribe(updatedJs => this.jobseekers = updatedJs);
  }

  delete(jobseekerId: number): void {
    this.rs.deleteJobseekerById(jobseekerId).subscribe(_ => {
      this.jobseekers = this.jobseekers.filter(deleteJobseeker => deleteJobseeker.id !== jobseekerId)
    })
  }
}


