// Creating a prototype object
var animal = {
    makeSound: function() {
      console.log("Some generic sound");
    }
  };
  
  // Creating a new object that inherits from the 'animal' prototype
  var dog = Object.create(animal);
  
  // Adding a specific property to the 'dog' object
  dog.breed = "Labrador";
  
  // Overriding a method from the prototype
  dog.makeSound = function() {
    console.log("Woof!");
  };
  
  // Using the object and its prototype
  console.log(dog.breed); // Output: Labrador
  dog.makeSound(); // Output: Woof!
  