//* ___________________________________________________
//* Interview Question: Count Occurrences of Character
//* ___________________________________________________

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// console.log(countChar("Mississippi", "I")); // Output: 4

// todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

/*
function countChar(str, char){
    str = str.trim()
    str = str.split("")
    let count = 0;
    for (let element of str) {
        // if((element.toLowerCase  === char || element.toUpperCase() === char)){
        char = char.toLowerCase()
        element = element.toLowerCase()
        if(element  === char ){
            count += 1
        }
    }
    return count
    
}
console.log(countChar("Mississippi", "I"));
*/

// using reduce()
function countChar(str, char){
    str = str.trim()
    str = str.split("")
    // let count = 0
    return str.reduce((accumulator, currentValue)=>{
        if(currentValue.toLowerCase() === char || currentValue.toUpperCase() === char){
            accumulator++
        }
        return accumulator
    }, 0)
    
}
console.log(countChar("Mississippi", "I"));