// Two ways to declare objects - literals and constructor(Singleton)


// ****************** object literals ******************

const JsUser = {
    name: "Nilesh",
    "full name": "Nilesh Roy",
    age: 23,
    email: "nileshwhiwhi@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Mondays", "Saturdays"]
}

console.log(JsUser.email);                          // Accesting with (.) notion
console.log(JsUser["email"]);                       // accesing with square [] notion
console.log(JsUser["full name"]);                   // can't access key-name with space with . notion


JsUser.email = "hello@google.com";                  // Updating value
JsUser["full name"] = "Atharva Roy";                // Updating value
console.log(JsUser);

// Object.freeze(JsUser);                              // Freezing object to rustricate updateding
JsUser.email = "hulala@halulu.com";                 // This will not work after freeze()

console.log(JsUser);


// function in Objects

JsUser.greeting = function(){
    console.log("Hellow JS User!");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log("This here: ", JsUser.greeting);
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());


// How to use Symbol() as key in object?
const mySym = Symbol("Key1");

const symObj = {
    [mySym]: "myKey1"                               // adding "Symbol()" variable as key of the object
}
// console.log(JsUser[mySym]);                      // accesing symbol key, use only square notion