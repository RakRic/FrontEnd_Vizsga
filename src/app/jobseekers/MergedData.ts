import { JobSeeker } from '../classes/jobseeker';
import { ProgrammingSkills } from '../classes/programmingSkills';
export class MergedData {
  jobseeker: JobSeeker;
  programmingSkills: ProgrammingSkills[];
  constructor(js: JobSeeker, ps: ProgrammingSkills[]) {
    this.jobseeker = js;
    this.programmingSkills = ps;
  }
}
