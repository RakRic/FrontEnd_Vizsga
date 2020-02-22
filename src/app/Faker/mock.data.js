var faker = require('faker');

var database = { users:[], companies: [], jobseekers:[], programming_skills : [],
bids:[]};

for (var i = 1; i<= 25; i++) {

  //companies
  database.companies.push({
    id: i,
    name: faker.company.companyName(),
    logo_path : faker.image.business(),
    headquarters: faker.address.city(),
    website: faker.internet.url(),
    motto: faker.lorem.words(15),
    description: faker.lorem.sentences(5),
  });

  var programmingSkills = [];
  var psCount = faker.random.number({min:3, max: 12});
  for(var j = 0;j < psCount; j++)
  {
    programmingSkills.push(
    {
      name : faker.address.countryCode(),
      experience : faker.random.number(30)
    })
  }
  
  //jobseekers
  database.jobseekers.push({
    id: i,
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    description: faker.lorem.sentences(5),
    profile_picture_path : faker.image.people(),
    age: faker.random.number(120),
    city : faker.address.city(),
    country : faker.address.country(),
    phonenumber: faker.phone.phoneNumberFormat(0),
    gender : faker.random.number({min:1, max:2}) == 1 ? "Male" : "Female",
    zipcode : faker.address.zipCode(),
    programming_skills : programmingSkills
  });
}

for(var i = 1; i<=25; i++)
{
    //users
    database.users.push({
      id: i,
      company_id : i,
      jobseeker_id : null,
      email: faker.internet.email(),
      password : faker.internet.password()
    });

    //users
    database.users.push({
      id: i + 10,
      company_id : null,
      jobseeker_id : i,
      email: faker.internet.email(),
      password : faker.internet.password()
    });
}

console.log(JSON.stringify(database));
