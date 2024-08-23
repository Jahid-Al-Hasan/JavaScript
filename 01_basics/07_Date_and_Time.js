let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // in js month start at 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 23)
// let myCreatedDate = new Date("2024-01-23")
// let myCreatedDate = new Date("01-23-2024")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime()); // time in millisecond

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // time in millisecond

let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    hour:"2-digit"
}));
