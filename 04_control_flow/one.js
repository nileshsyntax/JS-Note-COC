// if statement

// if (condition){
    // Code block excecute if condition is true, skips if false
// }

// comparison operator: <, >, <=, >=, ==, !=, ===, !==
// {

//     if (2 == "2") {
//         console.log("No strict check, Excuted");
//     }

//     if (2 === "2") {
//         console.log("Strict check, Not Excuted");
//     }

//     if (2 === 2) {
//         console.log("Strict check, Excuted");
//     }

//     if (2 != 3) {
//         console.log("Not equal, Excuted");
//     }
//     if (2 != "3") {
//         console.log("Not equal: Excuted");
//     }
//     if (2 !== "3") {
//         console.log("Strict not equal: Excuted");
//     }

// }


const temperature = 41;

if (temperature === 50) {
    // console.log("less than 50");
}
else{
    // console.log("Temperatue is greater than 50");
}


// The scope matter 
const score = 200;

if(score > 100) {
    const power = "Fly";
    // console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);                 // can't accese power variable, out of block scope



// Shorthand notation 

const number = 1000;
if(number > 500) console.log("test");                  // implicite scope 


// nesting conditions

const balance = 1000;

if(balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}


const isUserLoggedIn = true;
const debitCard = true;

if (isUserLoggedIn && debitCard && 2 == 2) {            // && return true if all condition is true
    console.log("Allow to  buy course");
}

const loggedInFromGoggle = false;
const loggedInFromEmail = true;

if (loggedInFromGoggle || loggedInFromEmail) {          // || retrun true if any one condition is true
    console.log("User logged in");
    
}