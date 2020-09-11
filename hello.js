// Prototype
function Person() {}
Person.prototype.name = 'protoName';

let person1 = new Person();
let person2 = new Person();

person1.name = 'objName';

// delete person1.name;

console.log(person1.name);
console.log(person2.name);

// Call back
// function myCallback(done) {
//   setTimeout(() => {
//     done();
//   }, 3000);
// }

// myCallback(() => console.log('my call back'));

// console.log('only log');
// let msg = 'my msg';
// console.log(msg);
