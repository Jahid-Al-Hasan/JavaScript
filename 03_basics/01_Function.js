function sayName(){ // function definition
    console.log('J')
    console.log('a')
    console.log('h')
    console.log('i')
    console.log('d')
}

// sayName // function reference
// sayName() // function execution

// function addTwoNumbers(num1, num2){ // parameter
//     console.log(num1+num2);    
// }
// addTwoNumbers(3,"4") // argument
// addTwoNumbers(3, null)
// const result = addTwoNumbers(4, 5) // ********
// console.log(result) // it results undefined

// function addTwoNumbers(num1, num2){
//     let result = num1+num2
//     return result // or, return num1+num2
//     console.log("Jahid") // after return function, this line will not work
// }
// const result = addTwoNumbers(4, 5)
// console.log("Result:", result)

function loginUserMessage(userName){
    if (!userName) {
        return console.log("Please enter a userName");
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("Jahid"))
console.log(loginUserMessage())