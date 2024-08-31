class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const jahid = new User("Jahid")
jahid.logMe()
// console.log(jahid.createId())
console.log(User.createId()); 

/*
Static methods, like createId() in the User class, are not called on instances of the class (like jahid or chatGPT). Instead, they are called directly on the class itself (User.createId() or Teacher.createId()).
*/

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const chatGPT = new Teacher("chatGPT", "chatgpt.openai.com")
chatGPT.logMe()
// console.log(chatGPT.createId());
console.log(Teacher.createId());


