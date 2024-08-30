// //--------------- promise creation --------------------//
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("async task is complete")
        resolve() // by using this resolve function it connected to then() and execute or promise resolved
    }, 1000)
})
// consume promise
promiseOne.then(function(){
    console.log("promise resolved")
})

// --------------------another way---------------------------
// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Async task 2');
//         // resolve()
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log('Async 2 resolved');
    
// })

// -----------------passing data------------------------
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({
//             username: 'Jahid',
//             email: 'jahid@gmail.com'
//         }) //pass data
//     }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user)
// })


// ---------------reject---------------------
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({
//                 username: 'Jahid',
//                 email: 'jahid@gmail.com'
//             })
//         } else {
//             reject("something went wrong")
//         }
//     }, 1000);
// })
// const username = promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// })
// console.log(username)
// ---------- catch----------
// promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error)
// })
// ---------- finally()----------
// promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log('the promise is either resolve or reject');
// })



// --------------------- Async, Await --------------------- //
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({
                username: 'Jahid',
                email: 'jahid@gmail.com'
            })
        } else {
            reject("something went wrong")
        }
    }, 1000);
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()


// --------------------get data from url-------------------
async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.org/users/2')
    // const data = response.json() // *** try using this
    const data = await response.json()
    console.log(data);
}
getAllUsers()

// ------------------using fetch---------------------
fetch('https://jsonplaceholder.org/users/1').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=> console.log(error))
// here no need try catch. execute sequentially - then-1 => then-2 => catch. so no error occur


// ******try to understand which execute first and why******
