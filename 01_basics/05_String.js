/*
Basic String Methods
Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
See Also:
String Search Methods
String Templates
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

let text = "abcdefghijklmnopqrstuvwxyz"
let length = text.length
// console.log(length);

// -----------------Extracting String Characters----------------
// console.log(text.charAt(25));
// console.log(text.charCodeAt(25));//The method returns a UTF-16 code (an integer between 0 and 65535).
// console.log(text.at(-2));//It allows the use of negative indexes while charAt() do not.
// console.log(text[2]);//If no character is found, [ ] returns undefined, while charAt() returns an empty string.

// -----------------Extracting String Parts--------------------
/*
slice(start, end)
substring(start, end)
substr(start, length)
*/
// let text_2 = "Apple,Banana,kiwi"
// console.log(text_2.slice(13));
// console.log(text_2.slice(-13));
// console.log(text_2.slice(7, 13));// end position not included

// console.log(text_2.substring(-7, 13));//substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring(). Here -7 treated as 0.

// console.log(text_2.substr(7, 13));//substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
// console.log(text_2.substr(7))
// console.log(text_2.substr(-7))

// ---------------------Converting to Upper and Lower Case----------------------
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// -----------------------remove white spaces-----------------------------
// let str = "     ajihidfj, "
// let str2 = str.trim();
// console.log(str.length);
// console.log(str2.length);

// ----------------replace-----------------
const url = "https://jahid.com/hasan%20akanda"
console.log(url.replace("%20","-"))
console.log(`hello jahid ${url}`)
// --------------------------split----------------------------------
