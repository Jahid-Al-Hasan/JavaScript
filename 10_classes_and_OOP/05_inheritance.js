class User {
    constructor(username){
        this.username = username; 

    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password;

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }

}

const teacher_1 = new Teacher("jahid", "jahid@gmail.com", "12345")

console.log(teacher_1);

teacher_1.addCourse()
teacher_1.logMe()


const teacher_2 = new User("Nayeem")
console.log(teacher_2);
// teacher_2.addCourse() // no access
teacher_2.logMe()