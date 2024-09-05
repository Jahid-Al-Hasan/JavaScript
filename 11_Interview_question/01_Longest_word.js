//____________________________________________________________
// Programming Question: Longest word in a string
//____________________________________________________________

//? Q: Write a function find LongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false. 
//? The function should ignore leading and trailing whitespace when determining the longest word.

const longestWord = function(str){

    if(str.trim().length === 0){
        return false
    }

    const array = str.split(" ")
    // console.log(array)
    let maxWord = ''
    for (let word of array){

        if(word.length > maxWord.length){
            maxWord = word
        }
        
    }
    return maxWord
}

console.log(longestWord("Jahid how are you ?"))
// complexity O(n)