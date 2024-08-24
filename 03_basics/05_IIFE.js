// Immediately Invoked Function Expressions (IIFE)


(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`)
})(); // " ; " must need to end function


// ()(); => 1st parenthesis is for function definition and 2nd for execution

(() => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO`)
})();

((name) => {
    console.log(`DB CONNECTED TO ${name}`)
})('Apache');