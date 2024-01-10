var person = new Object(); 
person.name = "Vishal Kumar";
person.age = 25;
person.city = "New Delhi";
person.greet = function () {
    console.log(`Hello, ${this.name}!`);
}
person.greet();

const obj1 = {1:"a",2:"b"}
const obj2 = new Object()
obj2[3] = "c"
obj2[4] = "d"

const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = {...obj1 ,...obj2}
console.log(obj3);

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

const users =[
    {
        name:"Vishal",
        age:25,
        email:"vk@kit.ac.in"
    },
    {
        name:"vishal Kumar",
        age:23,
        email:"k@kit.ac.in"
    },
    {
        name:"jack",
        age:20,
        email:"jack@kit.ac.in"
    },
    {
        name:"shin chain ",
        age:24,
        email:"shinchai@kit.ac.in"
    }
]

console.log(users[3].name.charAt(1).toUpperCase());
console.log(person.hasOwnProperty('name'));

console.log(person.hasOwnProperty('greet')); 

console.log(users[1].hasOwnProperty('name'));
console.log(person.constructor); 

