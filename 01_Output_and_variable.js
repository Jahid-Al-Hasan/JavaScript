/*
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

const accountId = 101
let accountEmail = "jahid@gmail.com"
var accountPassword = "12345678"
accountCity = "Mymensingh"
let accountState

// accountId = 102 // not allowed

accountEmail = "hasan@gmail.com"
accountPassword = "23545564"
accountCity = "Dhaka"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

