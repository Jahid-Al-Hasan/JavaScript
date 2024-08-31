function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log('called'); // to see called or not
    
}

function createUser(username, email, password){
    // SetUsername(username) // called but context not passed
    SetUsername.call(this, username) // context passed using "call" and "this"

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123456")
console.log(chai);
