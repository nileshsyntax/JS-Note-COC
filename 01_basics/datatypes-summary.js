
// Premitive: call by value
// 7 type : String, Number, Boolean, Null, undefined, Symbol, BigInt

// const score = 100
const score = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;                                      // undefined

// The Symbol data type
const id = Symbol('124')
const anotherID = Symbol('124')

console.log(id === anotherID)                       // false



// Reference Type: Non-Primitive
// Array, Objects, Functions

// Arrays
const heros = ["Iron Man", "Spider Man", "Dr. Strange"];

let myObj = {
    name: "Nilesh",
    age: 23
}

// function
const myfunction = function(){                      // defined in variable
    console.log("Hello World");
}

// ************************** Memory *******************************

// Stack Memory (used in Primitive dtat type), Heap Memory (used in Non-Primitive data type)


let myname = "Nilesh";
let anotherName = myname;

anotherName = "Atharva";

console.log(myname);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nilesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)


// ************************* Summary ****************************

// All primitive value stors in the STACK MEMORY, accessing any value from stack get us the copy of the value. Changing the copy value doesn't change the original

// Accessing value form HEAP MEMORY get the reference of the value or data. Non-Primitive values are stored in the HEAP MEMORY. Changing the refrerence value will also change the original value in the HEAP MEMORY.