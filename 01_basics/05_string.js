// The String Datatypes

const name = "Nilesh";                                                          // String
const repoCount = 50;                                                           // Number

console.log(name + repoCount + " Value");                                       // Outdated concatenation practice 


// ********************** String interpolation ********************
console.log(`Hello, I'm ${name} and my repo count is ${repoCount}`);            // New way: Use backtricks. 

const gameName = new String("Mojang Minecraft");                                // declare a string using JS object constructor


console.log(`key-value: ${gameName[0]}`);                                       // accessing strings in key-value pair
console.log(`Accessing prototypes: ${gameName.__proto__}`);                     // accessing prototypes


// ********************** String Methods **********************

console.log(gameName.length);
console.log(`Uppercase: ${gameName.toUpperCase()}`);                             // Also toLowerCase

console.log(`Char at a given index: ${gameName.charAt(2)}`)                      
console.log(`Index of a char: ${gameName.indexOf('s')}`)                        // Find the index of the character

const newString = gameName.substring(0, 4)                                      // Extract string from 0 to before index 4 (0-3)
console.log(`SubString: ${newString}`)

const anoString = gameName.slice(-8, 4)                                         // Same as substring but can take negetive value
console.log(`Slice: ${anoString}`)

const newString1 = "   Nilesh   "                                               // trim space
console.log(`Trimming: ${newString1.trim()}`)

const url = "https://nilesh.com/nilesh%20roy";

console.log(`Replace: ${url.replace('%20', '-')}`)
console.log(`If value exists: ${url.includes('nilesh')}`);                     // check if the value is in string


// converting string into array based on given value(a seperator)

let myString = new String("Nilesh-Roy-Designe-Web Developer");
console.log(`Split Array by '-': ${myString.split('-')}`);                      // value '-'

myString = "Nilesh-Roy-Designe-Web Developer";
console.log(`Split Array by ' ': ${myString.split(' ')}`);                      // value ' '
