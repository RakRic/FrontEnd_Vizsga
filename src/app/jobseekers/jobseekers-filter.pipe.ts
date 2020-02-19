import { PipeTransform, Pipe } from '@angular/core';
import { JobSeeker } from '../classes/jobseeker';
import { ProgrammingSkills } from '../classes/programmingSkills';
import { MergedData } from './MergedData';
@Pipe ({
    name: 'jobseekerFilter'
})

export class JobseekerFilterPipe implements PipeTransform {
    transform(programmingSkills : ProgrammingSkills[], searchTerm: string, jobseekers: JobSeeker[],): JobSeeker[] {
        console.log(jobseekers);
        console.log(searchTerm);
        console.log(programmingSkills);
        if (! jobseekers || !searchTerm) {
            return jobseekers;
        }
        return jobseekers;
    }
}