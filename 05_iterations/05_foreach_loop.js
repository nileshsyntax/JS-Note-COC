const coding = ["js", "ruby", "java", "python", "cpp"];

// Array.forEach(function (parameter) {} )             // param take the value of each item per iteration

coding.forEach(function (item) {
    // console.log(item);
})


// Using arrow function
coding.forEach((item) => {
    // console.log(item);
});


// declaring function first and taking reference in forEach loop
function printMe(item) {
    console.log(item);
}
// coding.forEach(printMe);


// forEach have the access of more parameter
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Rust",
        languageFileName: "rs"
    },
    {
        languageName: "TypeScript",
        languageFileName: "ts"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})