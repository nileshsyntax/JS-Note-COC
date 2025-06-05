// The truthy value and falsy value

let userEmail = "n@nilesh.ai";                              // truthy value
userEmail = "";                                             // empty string falsy value

if (userEmail) {
    // console.log("Got user emial");
} else {
    // console.log("Don't have user email");  
}


let userScors = [30, 20, 22, 30];                           // truthy value
userScors = [];                                             // also truthy value

if (userScors) {
    // console.log("Score true");
} else {
    // console.log("Score false", userScors);
    
}

// check if array is empty

if (userScors.length === 0){
    // console.log("Arrays is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
    
}


// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value: Rest of all are truthy value, which is not falsy value are truthy value
// confusing truthy value: "0", 'false', " ", [], {}, function(){} - empty function

// false == 0                                               // true
// false == ''                                              // true
// 0 == ''                                                  // true


// Nullish Coalescing Operator (??): null undefined 

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator: condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
