/*
There are two data type in JS
1. Primitive data type:
    7 type: String, Number, Boolean, null, undefined, Symbol, BigInt
2. Reference (Non Primitive) data type:
    Array, Object, Function

*/

// Number
/*
Javascript numbers are always one type:
double (64-bit floating point).
*/

// BigInt
const BigNumber = 5546465464546546454654646654

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // their return value not same

// Array
const heros = ["shaktiman", "naagraj", "doga"]

// Object => inside curly breaket
/*
Built-in object types can be:
objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
*/
let myObj = {
    name: "Hasan",
    age: 27
}

// Function
const myFunction = function(){
    console.log("Hello world")
}

// check dataType
console.log(typeof heros)

//+++++++++++++++++ stack and heap memory ++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

// stack => copy of data in stack
let myyoutubeName = "Jahid-Al-Hasan"
let anotherName = myyoutubeName
anotherName = "Naim-Bin-Nurullah"

console.log(myyoutubeName);
console.log(anotherName);

// heap => fixed memory allocation
let userOne = {
    email:"jahid@gmail.com",
    session:"2016"
}

let userTwo = userOne

userTwo.email = "akm@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
