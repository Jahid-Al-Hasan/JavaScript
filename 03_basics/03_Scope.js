// scope is {} in almost all programming languages
// used in function, condition etc [not object]
// both let and const are block-scoped [only accessible within block]

/*
var c = 300 // global scope [ out of {} ]

if(true){ //block scope
    let a = 10
    const b = 20
    var c = 30 // it cange 300 to 30
}

console.log(a); // comment this and run
console.log(b); // comment and run
console.log(c); // it works fine [but we can not use it]
*/


let a = 300
if (true) {
    // let a = 10
    console.log(a);
}
console.log(a)

//
let x = 10; // Global execution context

function foo(b) {
  let z = 20; // Function execution context
  console.log(x + y + z); // Accessing variables from different contexts
}
foo(30);

//---------------nseted scope----------------------
// child can get from parent. 
/*
function one() {

    const userName = "Jahid"

     function two(){
        const website = "youtube"
        console.log(userName);
        
     }

     console.log(website); // comment this and run
     
     two()
}

one()
*/

//---------------------hoisting in scope-----------------
console.log(addOne(5))
function addOne(num) {
    return num + 1
}

// console.log(addTwo(6)) // comment this and run
const addTwo = function(num) {
    return num + 2
}
// console.log(addTwo(6)) // now this will execute
