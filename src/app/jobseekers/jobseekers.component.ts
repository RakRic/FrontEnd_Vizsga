import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { JobSeeker } from '../classes/jobseeker';
import { ProgrammingSkills } from '../classes/programmingSkills';
import { MergedData } from './MergedData';

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.css']
})
export class JobseekersComponent implements OnInit {

  jobseekers : JobSeeker[];
  searchTerm: string;
  programmingSkills: ProgrammingSkills[];

  mergedDatas: MergedData[];

  constructor(private rs: RestService) { }

  ngOnInit(): void {
   this.rs.getJobSeekers().subscribe((data: any [])=>{
     this.jobseekers = data;
   });
   this.rs.getProgrammingSkills().subscribe((data: any [])=> {
     this.programmingSkills = data;
      this.mergedDatas = [];
     this.jobseekers.forEach(js => {
        var skills = this.programmingSkills.filter(p => p.jobseeker_id === js.id);
        this.mergedDatas.push(new MergedData(js, skills));
      });
   });
  }
}


