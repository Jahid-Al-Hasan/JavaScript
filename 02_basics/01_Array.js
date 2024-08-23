
//Parentheses () are used for function calls, grouping expressions, and function definitions.
//Curly Brackets {} are used to define blocks of code and object literals.
//Square Brackets [] are used for arrays, array destructuring, and dynamic property access.

// *** JS arrays are resizeable and can contain a mix of different data types.

// const myArray = [0,1,2,3,4,5,true,"Jahid"]
// console.log(myArray);
// myArray[6] = "Nayeem" // change an array
// console.log(myArray);

// ------------------array methods----------------------

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);
// myArray.pop() // pop last value
// console.log(myArray);

// myArray.unshift(7) // add a value at 0 index. So, all data need to be shifted to the next index.So it is not effective.
// console.log(myArray);
// myArray.shift() // remove 1st element
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(true));
// console.log(myArray.indexOf(12));

// const newArray = myArray.join()
// console.log(myArray)
// console.log(typeof myArray)
// console.log(newArray)
// console.log(typeof newArray)

//---------------slice & splice-------------------

// const newArr = myArray.slice(1, 3)
// console.log(myArray);
// console.log(newArr);
// console.log(myArray);
// const newArr_2 = myArray.splice(1, 3) // splice original array
// console.log(newArr_2);
// console.log(myArray);


//-----------------add one array values to another----------

// const marvel_heros = ['thor', 'ironman', 'spiderman']
// const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // full array add as one index

// const allHeros = marvel_heros.concat(dc_heros) // add only two arry
// console.log(allHeros)
// const all_new_heros = [...marvel_heros, ...dc_heros] // we can add two or more array
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity) // you can use number(parenthesis depth) or Infinity
// console.log(real_another_array)

// console.log(Array.isArray("Jahid")) // check array or not
// console.log(Array.from("Jahid")) // it creates array
// console.log(Array.from({name: "Jahid"})) // it can not create array from this format

let score_1 = 100
let score_2 = 200
let score_3 = 300
console.log(Array.of(score_1, score_2, score_3))