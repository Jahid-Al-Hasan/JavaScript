//* _________________________________________
//* Programming Question: Hash Tag Generator
//* _________________________________________

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.

const generateHash = function (str){
    if(str.length > 280 || str.trim() === ''){
        return false
    }

    let hash = '#'
    str = str.split(" ")
    str = str.map(function(curElem){
        // return curElem.replace(curElem[0],(curElem[0].toUpperCase()))
        return curElem.at(0).toUpperCase() + curElem.slice(1)
    })

    // for (let index = 0; index < str.length; index++) {
    //     hash += str[index]
        
    // }
    hash = `#${str.join("")}`
    return hash
    
}

console.log(generateHash("my name is jahid"))
// o/p = "#MyNameIsJahid"