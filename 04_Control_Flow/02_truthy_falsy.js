// const userEmail = []
// if(userEmail){
//     console.log('got user email');    
// } else {
//     console.log('Don\'t have an userEmail');
// }

// falsy values:
//  false, 0, -0, BigInt 0n, "", undefined, NaN
// truthy values:
// "0", "false", " ", [], {}, function(){}


// if (userEmail.length === 0){
//     console.log("array is empty");    
// }


// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is emply");    
// }

// false == 0 // true
// false == '' // true
// 0 == '' // true


//---------------- Nullish coalescing operator (??): null undefined ------------

// let value_1
// value_1 = 5 ?? 10
// value_1 = undefined ?? 10
// value_1 = null ?? 10
// value_1 = null ?? undefined ?? 20 ?? 30

// console.log(value_1);


//-------------------- ternary operator ---------------------

// condition ? true : false
const icePrice = 100
icePrice >= 80 ? console.log("less than 80") : console.log("more than 80")