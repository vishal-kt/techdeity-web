// object 
// singleton 
const person = {
        greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};
console.log(typeof person);

const john = Object.create(person);
john.name = "John";
john.greet(); // Output: Hello, John!




 const JsUser = {
    name:" Vishal",
    "full name":"Vishal Kumar",
    age: 25,
    location: "India",
    email:"test@mail.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday","Saturday"]
 }


 // use symbol in the objects 

const mysymbol = Symbol("my symbol");
 const JsUser1 = {
    name:" Vishal",
    "full name":"Vishal Kumar",
    [mysymbol]:"test symbol",
    age: 25,
    location: "India",
    email:"test@google.com",
 }
  console.log(JsUser1[mysymbol]);
console.log(JsUser.name);
console.log(JsUser["full name"]);
console.log(JsUser.age);
  console.log(typeof JsUser);




 Object.freeze(JsUser1);
JsUser1.email = "vishalstar895@gmail.com"

 console.log(JsUser1);

JsUser.greeting = function () {
    console.log(`hello js User, ${this.name},${this["full name"]} `);
}

JsUser.greeting();