const programming = ['js', 'cpp', 'ruby', 'java', 'python']


// programming.forEach(function(element){
//     console.log(element);
// })

// Or,
// programming.forEach(element => {
//     console.log(element); 
// });

// programming.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })



const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    // console.log(typeof item);
})