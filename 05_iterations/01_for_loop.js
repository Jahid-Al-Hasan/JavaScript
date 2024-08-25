

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }
// console.log(element) // can't access from outside the block


// let array = ['one', 'two', 'three']
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);    
// }


// ---------------break and continue------------------
// for (let index = 1; index <= 10; index++) {
//     if (index == 5) 
//         console.log('detected 5')
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log('detected 5')
//         continue // skip one execution
//     }
//     console.log(`value of i is ${index}`);
// }


//---------------------- for of -------------------------
// const arr = [1, 2, 3, 4, 5, 6]

// for (const i of arr) {
//     console.log(i);
// }


// const greetings = "Hello world"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }


// we can not use "forOf" loop for object iteration. we can use forIn loop.
// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }
// for(const [key, values] of myObj){
//     console.log(key, ":-", values);    
// }


//----------------------- for in ---------------------------
// we get object keys in forIn loop
// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }
// for(const key in myObj){
//     // console.log(key);
//     console.log(myObj[key]);
// }

const programming = ['js', 'rb', 'py', 'java', 'cpp']
for(const key in programming){
    console.log(key);
    // here array is by default an object. so it has keys and values. we can easily extract values from key.
}

