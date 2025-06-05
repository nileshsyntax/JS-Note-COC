// for loops

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner Loop ${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}


let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected ${index}`);
//         break;
//     }
//     console.log(`Value of index is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected ${index}`);
        continue;
    }
    console.log(`Value of index is ${index}`);
}
