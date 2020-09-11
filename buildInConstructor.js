// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(typeof name1); // string
console.log(typeof name2); // object

console.log(name1 === 'Jeff'); // true
console.log(name2 === 'Jeff'); // false the type is different

// RegExp
const reg1 = /\w+/;
const reg2 = new RegExp('\\w+'); // escape \

console.log(reg2);
