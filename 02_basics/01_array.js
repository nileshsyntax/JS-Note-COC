
// *********************** Arrays ***********************

{   // <----------- Code Note ----------->

    const myArr2 = new Array(2, 1, 4, 5, 3);                            // creting array using new constructor

    const marvel = ["Dr. Strange", "Ironman", "Spider Man"];            // literal methods
    console.log(`Index 2: ${marvel[2]}`);

    
    // ----------------- Array Method -----------------
    const myArr = [0, 1, 2, 3, 4, 5];
    console.log(`Index 0: ${myArr[0]}`);                                // Acessing by index

    myArr.push(6);                                                      // Adds new value to end of array
    myArr.pop();                                                        // remove last element of array, takes no argument
    myArr.unshift(9);                                                   // add value at the first of array
                                                                        // unshift: less optimized for large array
    myArr.shift();                                                      // remove first element of array

    console.log(`Is 9 exitst? ${myArr.includes(9)}`);                   // checks value exist or not
    console.log(`Is 5 exitst? ${myArr.includes(5)}`);
    console.log(`Indexfo 9: ${myArr.indexOf(9)}`);                      // return index -1, for non-exist value
    console.log(`Indexfo 9: ${myArr.indexOf(3)}`);


    const newArr = myArr.join();                                        // Join & concatinate array val to string.

    console.log(`Variable myArr: ${myArr}`);
    console.log(`Variable newArr: ${newArr}`);


    // The slice and splice Methods
    console.log("\nThe slice and splice method\n");

    const myn1 = myArr.slice(1, 3);                                     // from 1 to before 3
    console.log(`Sliced: ${myn1}`);
    console.log("After slice myArr:", myArr);

    console.log("");

    const myn2 = myArr.splice(1, 3);
    console.log(`Spliced: ${myn2}`);
    console.log("After splice myArr:", myArr);

}

{    /* Text Note

    
    The new constructor: 
    
    slice() creates a new array with a portion of elements copied from the original array
    splice() mutates the original array itself by removing, replacing or adding elements to it


    */
}