// singleton => it creates when we use constructor to create object
// Object.create

// object literals => when we generally create objects

/*
const JsUser = {
    name: "Jahid", // "key": value
    "full name": "Jahid Al Hasan",
    age: 18,
    location: "Mymensingh",
    email: "jahid@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondoay", "Saturday"]
}

console.log(JsUser.email) // can not use for all keys
console.log(JsUser["email"]);
// console.log(JsUser.full name); // its wrong
console.log(JsUser["full name"]);

// -----------decleare a symbol and add to object key and print-----------
const mySym = Symbol('key1')
const myObj = {
    [mySym]: 'This is a unique symbol property',
    key2: "jahid",
    key3: "Hasan"
}

console.log(myObj[mySym]) // ********* 
console.log(Object.getOwnPropertySymbols(myObj));
console.log(Object.getOwnPropertyDescriptor(myObj, mySym));
*/

//-------------------change a value or freeze-----------------
const JsUser = {
    name: "Jahid", // "key": value
    "full name": "Jahid Al Hasan",
    age: 18,
    location: "Mymensingh",
    email: "jahid@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondoay", "Saturday"]
}

// JsUser.email = "hasan@gmail.com"
// console.log(JsUser)
// Object.freeze(JsUser)
// JsUser.email = "al@gmail.com"
// console.log(JsUser)

// *** use method of this object [note: comment the freeze]
JsUser.greeting = function(){
    console.log("Hello JS user")
}
// console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`) // use "this" when use same object properties
}
console.log(JsUser.greetingTwo());
