// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  // property
  this.firstName = firstName;
  this.lastName = lastName;
  this.birth = new Date(dob);

  // all the same for different person
  // should move to prototype
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birth.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Manipulate data
// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

// calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birth.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const john = new Person('John', 'Doe', '5-10-1980');
const marry = new Person('Marry', 'Johnson', 'March 20 1995');

//console.log(john.calculateAge());
console.log(marry.getFullName());

marry.getsMarried('Smith');
console.log(marry.getFullName());

console.log(marry.hasOwnProperty('firstName')); // true
console.log(marry.hasOwnProperty('getFullName')); // false in the prototype
