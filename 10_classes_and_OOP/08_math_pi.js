// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// create my own property
const weight = {
    name: '1kg',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(weight, "name"))

// edit property of my obj
Object.defineProperty(weight, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(weight,"name"));


// need more to learn about this tipics