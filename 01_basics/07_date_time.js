// ************** Dates and Time ****************


let myDate = new Date();                                        // Creating new date
console.log(myDate);

console.log(`To String: ${myDate.toString()}`);
console.log(`To Date String: ${myDate.toDateString()}`);
console.log(`To Local String: ${myDate.toLocaleString()}`);
console.log(`To Local Date String: ${myDate.toLocaleDateString()}`);

console.log(`To JSON: ${myDate.toJSON()}`);
console.log(`To ISO String: ${myDate.toISOString()}`);

// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);                      // creating custom date
myCreatedDate = new Date(2023, 0, 23, 5, 3);                    // custome date-time(use arry indexing)
myCreatedDate = new Date("2024-01-14");                         // usingcustom date format
myCreatedDate = new Date("01-14-2024");                         // another format

console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());                           // get the time value

console.log(Math.floor(Date.now()/1000));                       // Convert into second


let newDate = new Date();
console.log(newDate);
console.log(`Day: ${newDate.getDay()}`);
console.log(`Month: ${newDate.getMonth()}`);
console.log(`Year: ${newDate.getFullYear()}`);
console.log(`Second: ${newDate.getSeconds()}`);
console.log(`Minutes: ${newDate.getMinutes()}`);
console.log(`Hours: ${newDate.getHours()}`);


// You can define object inside it and it allow to define different parameter.
newDate.toLocaleString('default', {
    weekday: "long"
})                                                             // Practice it







