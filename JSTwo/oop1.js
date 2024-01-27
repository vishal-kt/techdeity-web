// Constructor function
function Animal(name) {
    this.name = name;
}

// Adding a method to the prototype property of the constructor
Animal.prototype.sound = function() {
    console.log(`${this.name} makes a sound.`);
};

// Creating an instance of Animal using 'new' keyword
const dog = new Animal("Buddy");

// Accessing properties from the instance
console.log(dog.name);  // Output: Buddy

// Accessing the method through the prototype chain
dog.sound();  // Output: Buddy makes a sound.
