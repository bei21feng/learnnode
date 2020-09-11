// 1. Just one instance

// const brad = {
//   name: 'Brad',
//   age: 20,
// };
// console.log(brad);

// console.log(brad.age);

//
// 2. Constructor for person

function Person(name, dob) {
  this.name = name;
  this.birth = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birth.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
// Instantiate a person
const brad = new Person('brad', '6-3-1998');
console.log(brad.calculateAge());
