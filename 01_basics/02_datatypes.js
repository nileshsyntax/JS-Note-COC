
"use strict";                           // treat all JS code as newer version

// alert(3 + 3);                        // on node.js alret method inaccesible, it's browser method


// premitive data types.

// number           => 2 to pwer 53 or something
// string           => "" or ''
// boolean          => true/false
// null             => a representation of empty value, standalone value
// undefined        => variable declared but the value yet not defined(assigned)
// symbol()         => Unique, use to create unique value as symbol
// bigint           => use for large number like, treding, stock market, reddit, facbook websites.

let name = "Nilesh";                    // string
let isLoggedIn = true;                  // boolean
let age = 18;                           // number
let state = null;                       // null can be assigned intentionally
let id;                                 // undefined value


// Non-Primitive(reference) data types
// object data type


// typeof operator use to check the type of data

console.log(typeof undefined);          // undefined
console.log(typeof null);               // object, typeof null is object which is a quirks



// *************************************************************************************************
// ** Practice Code readiblity: Write highly readable code, for future self and other collaborators.
// ** Documentation => 1) tc39.es original specification   2) MDN (recomended reading)