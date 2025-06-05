// ***************** Scopes in JavaScript *****************
// What is block scpoe?
// What is global scope?


{
    // Scopes of function, if else conditions etc are Block Scope.
}


// Why not to use var? 

var c = 300;

if(true) {
    let a = 10;                     // Inside blodk scope
    const b = 20;                   // Inside blodk scope
    var c = 30;                     // This will leak outside block...
}

// console.log(a);                  // warn not defined ✅
// console.log(b);                  // warn not defined ✅
// console.log(c);                     // ... and it be accessed from here, ignore var c = 300 ❌


// ........... Why to use let and const .............

let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    // console.log("Inside Block:", a);     // Output 10
}

// console.log(a);                         // Output 300


// ............... Nested Scope .................

// Inside a nested function
function one() {
    const username = "Nilesh";
    
    function two() {
        const website = "github";
        console.log(username);
    }
    
    // console.log(website);
    two();
}
// one();


// Inside a nested condition
if (true){
    const username = "Nilesh";

    if(username === "Nilesh"){
        const website = " Github";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++ interesting ++++++++++++++++++++++++

function addone(num){
    return num + 1;
}
addone(5);

const addTwo = function (num){
    return num + 2;
}

addTwo(5);














// .....................................................................................
// (The global scope of browser dev console and the node code environment is different)