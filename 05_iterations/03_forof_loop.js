// For of Loops

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!";

for (const greet of greeting) {
    // console.log(greet);
}


// Maps 

const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('FR', "France");
map.set('IN', "India");                                 // won't add the same data
// console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {                       // destructuring the maps key, value
    // console.log(key, ':-', value);
}







// Object is not iterable on for of loop
// const myObj = {
//     game1: 'NFS',
//     game2: 'Spinderman'
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }

