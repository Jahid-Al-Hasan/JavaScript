
// <, >, <=, >=, ==, !=, ===, !==

// if (2 === "2"){ // also check datatype
//     console.log("executed")
// }


// const balance = 1000
// if (balance > 500) console.log("test");

// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test 2");


// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");    
// } else if (balance < 750){
//     console.log("less than 750");    
// } else if (balance < 1000){
//     console.log("less than 1000");    
// } else {
//     console.log("grater than 1000");    
// }


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");    
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("User logged in");    
// }



//---------------------- switch ------------------------\\
const month = "Jan"
switch (month) {
    case "Jan":
        console.log("Jan")        
        break; // if remove this break, it will execute all the case below without check condition except default.
    case "Feb":
        console.log("Feb")        
        break;
    case "Mar":
        console.log("Mar")        
        break;

    default:
        console.log("No manth match")
        break;
}