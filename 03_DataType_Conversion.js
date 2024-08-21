
let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

// NaN
let score_2 = "33ab"
console.log(typeof score_2);
let valueInNumber_2 = Number(score_2)
console.log(valueInNumber_2)

// check for value null
let score_3 = null
console.log(typeof score_3);
let valueInNumber_3 = Number(score_3)
console.log(valueInNumber_3)

// check for value undefined
// undefined => 0

// check for value true/false
// true => 1; false =>0

// number to boolean
let isLoggedIn = 111 // check for value "Jahid", "", 0, 1, 12455
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 => true; 0 => false; 11125 => true
// "" => false; "Jahid" => true
