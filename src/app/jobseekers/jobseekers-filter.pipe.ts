import { PipeTransform, Pipe } from '@angular/core';
import { JobSeeker } from '../classes/jobseeker';

@Pipe ({
    name: 'jobseekerFilter'
})

export class JobseekerFilterPipe implements PipeTransform {
    transform(jobseekers: JobSeeker[], searchTerm: string): JobSeeker[] {
        if (! jobseekers || !searchTerm) {
            return jobseekers;
        }
        var result = [];
        for(var i = 0; i<jobseekers.length; i++)
        {
            var ps = jobseekers[i].programming_skills;
            for(var j = 0; j <ps.length; j++)
            {
                if(ps[j].name.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
                {
                    result.push(jobseekers[i]);
                }
            }
        }
        return result;
    }
}