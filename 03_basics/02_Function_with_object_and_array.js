// -----------------rest operator (...)-------------------

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 100))

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 100))

//-----------------insert obj in function------------
// const user = {
//     name: "Jahid",
//     email: "jahid@gmail.com"
// }

// function handleObject(anyObject) {
//     console.log(`UserName is ${anyObject.name} and email is ${anyObject.email}`)
// }
// handleObject(user)

//---------------insert array in function---------------
const myNewArray = [200, 400, 500]
function returnSecondValue(getArray) {
    return getArray
    // return getArray[1]
}
console.log(returnSecondValue(myNewArray));
