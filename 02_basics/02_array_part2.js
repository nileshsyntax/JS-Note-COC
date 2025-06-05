// ******************** Array Part 2 **********************

const marvel_heros = ["Dr Strange", "Iron Man", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];


// // Bad Practice of concat array and accesing them
// marvel_heros.push(dc_heros);                     

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Good Practice - use concat instead
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros];                 //  Concat using Spread Operator
console.log(allNewHeros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);            // converts into one dimensional array
console.log(`real_another_array: ${real_another_array}`);


// Converting other values into array: Method 1
console.log(Array.isArray("Nilesh"));                               // check is array? true or false
console.log(Array.from("Nilesh"));                                  // converts any value to array

// Method 2: useful to convert multiple elements into an array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));



