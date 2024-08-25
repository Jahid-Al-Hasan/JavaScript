//---------------------- map ----------------------

const map = new Map()
map.set('IN', 'India')
map.set('BD', 'Bangladesh')
map.set('Fr', 'France')

// console.log(map);

// for (const [key, value] of map){
//     console.log(key, ':-', value);
// }

// iteration map using forIn loop is not possible
for (const key in map){
    console.log(key);    
}


//------------------------------------------
const myNumbes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbes.map( (num) => {
//     return num+10
// })
// console.log(newNums)

const newNums = myNumbes.map( (num) => num*10) // array * 10
                        .map( (num => num+1)) // array + 1
                        .filter( (num) => num >= 40) // filter >= 40

console.log(newNums);
