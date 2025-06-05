
// *************** Object Part 2 ******************

// const tinderUser = new Object (){}                               // using new constructor



const tinderUser = {};                                              // declaring an empty object

tinderUser.id = "123abc";
tinderUser.name = "Nilesh";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

console.log(Object.keys(tinderUser))                            // Get objects keys, data type: array
console.log(Object.values(tinderUser))                          // Get objects values, data type: array
console.log(Object.entries(tinderUser))                         // Get bjects key-value, data type: array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));           // checks if the property exist in the obj
console.log(tinderUser.hasOwnProperty('isLogged'));


// ************* Nested object *************
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nilesh",
            lastname: "Roy"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);               // Accessing nested object


// ************* Marging Objects object *************

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }


// const obj3 = Object.assign(obj1, obj2)                               // Marging 2 objects
// const obj3 = Object.assign({}, obj1, obj2, obj4)                     // Marging more objects
const obj3 = { ...obj1, ...obj2, ...obj4 }                              // using spread operator

// The spread operator spread operator expands an iterable (like an array or object) into individual elements
console.log(obj3);


// ************* The array of objects *************
const users = [
    {
        id: 1,
        email: "h@gmial.com"
    },
    {
        id: 1,
        email: "h@gmial.com"
    },
    {
        id: 1,
        email: "h@gmial.com"
    }
]

console.log("Array of Obj: ", users[1].email);                          // Accessing array of Obj


// ************** Destructuring Object *******************
const course = {
    coursename: "JS in Hindi",
    price: 999,
    courseInstructor: "Nilesh"
}


// const {key: rename key} = objectName
const {courseInstructor} = course;                  // destructuring courseInstructor from object course
const {courseInstructor: instructor} = course;      // destructuring + nameing the key

console.log(courseInstructor);
console.log(instructor);



// ****************API and JSON **********************

// JSON

// {
//     name: "Nilesh",
//     "courseName" = "JS in Hindi",
//     "price" = "Free"
// }

[
    {},
    {},
    {}
]
