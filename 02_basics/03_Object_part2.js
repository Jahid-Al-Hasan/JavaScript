// const tinderUser = new Object() // singleton
const tinderUser = {} // non singleton

tinderUser.id = "123"
// console.log(tinderUser);

const regularUser = {
    email: "hasan@gmail.com",
    fullname: {
        userfullName: {
            firstName: "Jahid",
            lastName: "Hasan"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstName)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}
// const obj_all = Object.assign({}, obj1, obj2, obj3)
const obj_all = {...obj1, ...obj2, ...obj3}
// console.log(obj_all);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ---------------------part 3---------------------------
// ------------------destructure of object----------------
const course = {
    courseName : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor);

// JSON 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]