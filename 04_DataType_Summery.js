/*
There are two data type in JS
1. Primitive data type:
    7 type: String, Number, Boolean, null, undefined, Symbol, BigInt
2. Reference (Non Primitive) data type:
    Array, Object, Function

*/

// BigInt
const BigNumber = 5546465464546546454654646654

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // their return value not same

// Array
const heros = ["shaktiman", "naagraj", "doga"]

// Object => inside carly breaket
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