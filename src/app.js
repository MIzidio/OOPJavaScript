// Person contructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//greeting
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

//customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    
    this.phone = phone;
    this.membership = membership;
}

// inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

//make customer.prototype return Customer()
Customer.prototype.constructor = Customer

//create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

//customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} \nwelcome to our company`;
}

console.log(customer1.greeting())