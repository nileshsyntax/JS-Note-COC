// console.log("Hello World");

const accountId = 144553;
let accountEmail = "ablaabla@gmail.com";

// var accountPassword = "12345";               // Not to use var declaration
// accountCity = "Kolkata";                     // Not to declare like this even it's possible in JS

let accountPassword = '12345';
let accountCity = 'Kolkata';
let accountState;                               // declaration without assigment

// accountId = 2;                               // Don't allow to change value with const
accountEmail = "adlelee@ule.com";               // updating variable value
accountPassword = "23923";                      // updating variable value
accountCity = "Barddhaman";                     // updating variable value

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);   // Table view