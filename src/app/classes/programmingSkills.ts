export class ProgrammingSkills
{
    id:number;
    name:string;
    experience: number;
    jobseeker_id:number;


    constructor(id,name, experience, jobseeker_id)
    {
        this.id = id;
        this.name = name;
        this.experience = experience;
        this.jobseeker_id = jobseeker_id;

    }
}