// ------------array pototype--------------------
const arr = [1, 2, 3, 4, 5]
console.log(arr.__proto__) // run on browser colsole
// find prototpe and it is infinite prototype-layer on console


// -----------------------------------------------
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to the prototype 
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

Person.prototype.running = function() {
    console.log(`${this.name} is running so fast`);
};

// const alice = Person('Alice', 25);
// const bob = Person('Bob', 30);
const alice = new Person('Alice', 25); 
const bob = new Person('Bob', 30);

alice.sayHello(); // Output: Hello, my name is Alice
bob.sayHello();   // Output: Hello, my name is Bob

console.log(typeof Person)
console.log(typeof alice)
console.log(Person.prototype)
console.log(typeof Person) // as a function 
console.log(typeof Person.prototype) // function as a object
console.log(alice.__proto__);
console.log(Person.prototype.__proto__);
console.log(Object.prototype);
console.log(Object.prototype.__proto__);


// hithsh
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()