
// ************** JavaScript Function ****************


// function sayMyName() {
//     console.log("N");
//     console.log("I");
//     console.log("L");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName();



// function addTwoNumbers(number1, number2){               // function functionName(parameter, parameter, ..)
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4);                                    // function call: functionName(argument, arg, ..)

// const result = addTwoNumbers(3, 5);                     // storing into a variable
// console.log("Result: ", result);                        // Output: Result: undefined


// function addTwoNumbers(number1, number2){               
//     let result = number1 + number2;
//     return result;
// }

function addTwoNumbers(number1, number2){               
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result:", result);                          // Output: Result: 8 (value)


function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return;                                          // stops next excution for undefined username
    // }
    if (!username) {                                        // another method to..
        // console.log("Please enter a username");
        return;                                             // ..stops next excution for undefined username
    }
    // return `${username} just logged in `;
}

// loginUserMessage("Nilesh");                              // only returns but don't print
// console.log(loginUserMessage("Nilesh"));                    // print the returns
// console.log(loginUserMessage());                            // undefined


// *************** Rest operator ******************

// The rest(...) operator is the same three dot (...) that used as spread operator. When it collects n number data it's called rest operator.

// function calculateCartPrice(...num1){       
//     return num1;
// }

function calculateCartPrice(val1, val2, ...num1){       
    return num1;
}

// console.log(calculateCartPrice(100, 400, 232, 20));


// .............. Object and array in function ...................

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price si ${anyobject.price}`);
}


// passing an Object variable in function argument
const user = {
    username: "Nilesh",
    price: 199
}
handleObject(user);


// Passing object directly in fuction argument
handleObject({
    username: "Nilesh",
    price: 200
})


function returnSecondValue(getArray){
    return getArray[1];
}

// passing an Array variable in function argument

const myNewArray = [200, 400, 100, 600];
console.log(returnSecondValue(myNewArray));

// Passing array directly in fuction argument
console.log(returnSecondValue([400, 200, 100, 600]));
