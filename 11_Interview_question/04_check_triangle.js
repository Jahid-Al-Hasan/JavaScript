
//*____________________________________________
//* Interview Question:
//*____________________________________________
//? Write a function called check Triangle Type that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type Pull up for precise of triangle: "equilateral", "isosceles", or "scalene".

console.log(checkTriangleType (3, 3, 3)); // Output: "equilateral" 
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles" 
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"
console.log(checkTriangleType(2, 5, 1))

//todo The function should adhere to the following rules: 
//? If all three sides are of equal length, return "equilateral" 
//? If only two sides are of equal length, return "isosceles". 
//? If all three sides have different lengths, return "scalene".

// solution:
function checkTriangleType(a, b, c){

    if((a+b) > c && (a+c) > b && (b+c) > a){
        if(a === b && b === c){
            return "equilateral"
        } else if(a === b || b === c || a === c){
            return "isosceles"
        } else if(a !== b && a !== c && b !== c){
            return "scalene"
        }
    } else {
        return "Not a triangle"
    }
}