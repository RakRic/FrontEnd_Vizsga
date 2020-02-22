export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;

    constructor(id,username, password, firstName, lastName, token?)
    {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = token;
    }


}