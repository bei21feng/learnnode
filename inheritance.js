// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// greeting
Person.prototype.greeting = function () {
  return `hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // call

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototpye return Customer
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '123', 'Standard');

console.log(customer1);

// Customer Greeting (overwrite)
Customer.prototype.greeting = function () {
  return `hello ${this.firstName} ${this.lastName}
welcome to our company`;
};
console.log(customer1.greeting());
