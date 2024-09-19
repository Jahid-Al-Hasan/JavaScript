//*________________________________________________
//* write a function to sort an array of numbers in an ascending order
//*________________________________________________

console.log(sortAscending([10, 3, 1, 8]))

// todo Requirements:
//? The function should take an array of numbers as input
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the build-in sort() method

// Solution 1: (bubble sort - o(n^2))
function sortAscending(array){
    for (let i = 0; i < array.length-i-1; i++) {
        for(let j =0; j < array.length - j-1; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

// solution 2: using default sort function
// function sortAscending(array) {
    
//     // return array.sort() // sort as string
//     return array.sort( (a, b) => a - b)

// }
