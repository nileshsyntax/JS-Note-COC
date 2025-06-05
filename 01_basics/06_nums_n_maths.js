//Numbers and Maths....

const score = 400;


const balance = new Number(400)                                 // dedicately defined number, constructor

// console.log(balance)
console.log(balance.toString())                                 // converts into string
console.log(balance.toString().length)                          // using string property

console.log(balance.toFixed(2));                                // Output: 400.00, fix the precision value


// const otherNum = 23.8966;
// const otherNum = 123.8966;
const otherNum = 1123.8966;
console.log(otherNum.toPrecision(3));                           // Practice this

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));                  // Converts into local string


// +++++++++++++++++++++ Maths +++++++++++++++++++++
// console.log(Math);

console.log(Math.abs(-4));                                      // turn negetive into postitive
console.log(Math.round(4.5));                                   // value round of to nearest int
console.log(Math.ceil(4.2));                                    // value round of to next int
console.log(Math.floor(4.8));                                   // value round of to previous int
console.log(Math.sqrt(25));                                     // Output: 5

console.log(Math.min(4, 5, 3, 1));
console.log(Math.max(4, 5, 3, 1));

console.log(Math.floor(Math.random() * (max - min + 1) + min));     // Generating Random Number