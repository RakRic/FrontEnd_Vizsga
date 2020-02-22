import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { ActivatedRoute } from '@angular/router';
import { JobSeeker } from '../classes/jobseeker';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {
  jobseeker: JobSeeker;
  constructor(private rs: RestService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.rs.getJobseekerById(this.route.snapshot.paramMap.get('id'))
      .subscribe(_jobseeker => {this.jobseeker = _jobseeker;})
  }
}
