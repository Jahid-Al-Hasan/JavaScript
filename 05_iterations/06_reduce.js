const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acumulatro, current_value,) {
//     console.log(`Accumulator: ${acumulatro} and currentValue: ${current_value}`);
//     return acumulatro + current_value
// }, 0) // we can define acumulator. here 0
// console.log(myTotal);

// Or,
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 )
// console.log(myTotal);

//------------------- add prices to shopping cart-------------
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "html course",
        price: 299
    },
    {
        itemName: "mobile dev course",
        price: 5500
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
