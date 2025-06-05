
// ................ object & ths keyword .................

const user = {
    username: "Nilesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);          // access var in current scope/obj
        // console.log(this);

    }
}
// user.welcomeMessage();
user.username = "Sam";
// user.welcomeMessage();

/* A NOTE
console.log(this), In global scope returns empty object in node environment acurrent context empty. In browser Devloper console: retrun Window obj as current context as it's the global object.
*/


// ........... this inside funtions ..............

function chai(){
    let username = "Nilesh"
    console.log(this.username);                                             // won't work in functon
}
// chai();

const newchai = function (){
    console.log(this);                                                      // return Object Global
}
// newchai();

const chaiagain = () => {
    console.log(this);                                                      // return empty object
}
// chaiagain();


// ****************** Arrow Function () => {} ********************

const addTwo = (num1, num2) => {                                            // arrow function
    return num1 + num2;                                                     // explicite return (using return keyword)
}
// console.log(addTwo(5, 3));


const addNewTwo = (num1, num2) => num1 + num2;                              // implicit without return key
const addTwoAgain = (num1, num2) => ( num1 + num2 );                        // using parentheses
const addanotherTwo = () => ( {username: "Nilesh"} );                       // implicit return object

console.log(addNewTwo(4, 6));
console.log(addTwoAgain(10, 20));
console.log(addanotherTwo());
