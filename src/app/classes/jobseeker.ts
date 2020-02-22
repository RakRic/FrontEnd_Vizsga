
export class JobSeeker
{
    id:number;
    firstname:string;
    lastname:string;
    description:string;
    profile_picture_path:string;
    age:number;
    city:string;
    country:string;
    phonenumber:string;
    gender:string;
    zipcode:string;
    programming_skills:any[];


    constructor(id, firstname, lastname, description, profile_picture_path, age, city, country, phonenumber, gender, zipcode, programming_skills)
    {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.description = description;
        this.profile_picture_path = profile_picture_path;
        this.age = age;
        this.city = city;
        this.country = country;
        this.phonenumber = phonenumber;
        this.gender = gender;
        this.zipcode = zipcode;
        this.programming_skills = programming_skills;
    }
}