const user = {
    username: "Jahid",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Hasan"
// user.welcomeMessage()

// console.log(this)


// function chai() {
//     let username = "Jahid"
//     console.log(this.username) // we can only use 'this' on object. we can't use 'this' on function.
//     // console.log(this)
// }
// chai()


// const chai = () => {
//     let username = "Jahid" 
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2)
const addTwo = (num1, num2) => ({username: "Jahid"}) // to return obj used parenthesis ()
console.log(addTwo(4, 10));
