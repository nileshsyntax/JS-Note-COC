
// *********************** Number Conversions *********************** 

let score =  "33abc";
console.log(typeof score);                          // or also typeof(score)


let valueInNumber = Number(score);                   
// console.log(valueInNumber);                      // Output: NaN(Not a Number)
// console.log(typeof valueInNumber);               // but the type of NaN returns number

// "33"             => 33                           // int value as string converts to number
// "33abc"          => NaN
// true/false       => 1/0                            
// null             => 0
// undefined        => NaN


// *********************** Boolean Conversions ***********************

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1            => true;
// 0            => false
// ""           => false;
// "Nilesh"     => true


// *********************** String Conversions *********************** 

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);



// ************************** Operation ***********************
let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2)
// console.log(2 ** 3)
// console.log(2 / 2)
// console.log(2 % 3)

let str1 = "Hello";
let str2 = " Nilesh";

let str3 = str1 + str2
// console.log(str3)                        // Adding two string

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)                 // Don't use in productin
// console.log(1 + 2 + "2")                 // Not to wrtie code like this

// console.log(true);      
// console.log(+true);                      // Not to wrtie code like this

// let num1, num2, num3                     // Not to wrtie code like this
// num1 = num2 = num3 = 2 + 2               // Not to wrtie code like this



//  ********* Prefix and Postfix Operator  *********

let gameCounter = 100;

gameCounter++;                              // postfix
console.log(gameCounter);

++gameCounter;                              // prefix
console.log(gameCounter);

        
let x = 3;
const y = x++;                              // first x assign it's value to y(3) then increment 1, x = 4

console.log(`x:${x}, y:${y}`);              // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;                              // first a increment it's value to 1(a = 4) then assign to b(4)

console.log(`a:${a}, b:${b}`);              // Expected output: "a:4, b:4"


// Note: The increment(++) operator use to add value by 1
// Note: In the same way the decrements(--) operator use to subtracts the value by 1






