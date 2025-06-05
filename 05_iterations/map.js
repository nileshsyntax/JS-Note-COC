const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nums = myNums.map( (num) => num + 10);            // returns value, map doesn't filter as filter()

nums = myNums
            .map( (num) => num * 10)
            .map( (num) => num + 1)
            .filter( (num) => num >= 40);


console.log(nums);


// Try to it with forEach


