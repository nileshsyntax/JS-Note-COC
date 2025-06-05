// Immediately Invoke Function Expressions (IIFE)

(function chai(){                                   // named IIFE
    console.log(`DB CONNECTED`);
})();


( () => {                                           // simple IIFE (arrow function/unnamed)
    console.log(`DM CONNECTED TWO`);
} )();


// passing parameter and argument in IIFE function
( (name) => {
    console.log(`DM CONNECTED TWO ${name}`);
} )('Chai DB');


