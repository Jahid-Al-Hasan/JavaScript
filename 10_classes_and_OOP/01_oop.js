//------------------------function--------------------------
// regular function => function start with lower case
// function user(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     // return this;
// }

// const userOne = user("jahid", 12, true)
// console.log(userOne)
// console.log(typeof userOne)

//-----------------------constructor------------------------
// Constructor => function start with uppercase
// its just naming nothing else. Basically both upper case and lower case work as constructor when we create an instance using "new"
// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     return this;
// }

// const userOne = User("jahid", 12, true)
// const userTwo = User("Hasan", 14, true)
// console.log(userOne) // how? => now it is a function not a constructor

//---------------------- create instance -------------------
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // return this; // no need
}

const userOne = new User("jahid", 12, true)
const userTwo = new User("Hasan", 14, true)
console.log(userOne)
console.log(userOne.constructor)