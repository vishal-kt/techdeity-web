var person = new Object(); 
person.name = "Vishal Kumar";
person.age = 25;
person.city = "New Delhi";
person.greet = function () {
    console.log(`Hello, ${this.name}!`);
}
person.greet();