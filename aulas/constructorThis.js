// Person contructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const Brad = new Person('Brad', 36);
// const John = new Person('John', 30);

// console.log(John.age);

const brad = new Person('Brad', '6-8-1980');
console.log(brad.calculateAge());