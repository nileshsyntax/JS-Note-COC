// The for in loop
// for in loop are used to iterate objects

const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "Swift by apple"
}

for (const key in myObj) {
    console.log(key);                                        // print key of object
    console.log(myObj[key]);                                 // print value of object
    console.log(`${key} shortcut is for ${myObj[key]}`);        // key value
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(key);                                           // get the key of array
    console.log(programming[key]);                              // get the value of array
}


const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('FR', "France");

for (const key in map) {
    console.log(key);                                           // map is not iterable with 'for in' loop
    
}

// what is the difference between 'for in' loop and 'for of' loop in array