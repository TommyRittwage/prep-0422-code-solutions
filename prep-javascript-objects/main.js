var person = {
  firstName: 'Tommy ',
  lastName: 'Rittwage',
  hobby: 'Cooking'
};
console.log('Person:', person);

var fullName = person.firstName + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Marketing Associate';
console.log("The person's current job is:", person.job);

person.previousJob = 'Carried things at a moving company';
console.log("The person's previous job was:", person.previousJob);

console.log('The complete person object:', person);
