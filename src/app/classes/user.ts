export class Users
{
    id:string;
    company_id:number;
    jobseeker_id:null;
    email:string;
    password:string;

    constructor(id,company_id, jobseeker_id, email, password,)
    {
        this.id = id;
        this.company_id = company_id;
        this.jobseeker_id = jobseeker_id;
        this.email = email;
        this.password = password;
    }


}