export class Company
{
    id:number;
    name:string;
    logo_path: string;
    headquarters: string;
    website:string;
    motto: string;
    description: string;


    constructor(id,name, logo_path, headquarters, website, motto, description)
    {
        this.id = id;
        this.name = name;
        this.logo_path = logo_path;
        this.headquarters = headquarters;
        this.website = website;
        this.motto = motto;
        this.description= description;

    }
}