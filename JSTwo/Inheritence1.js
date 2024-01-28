


const Teacher = {
    makeVide:true 
}

const User = {
    username:"chai",
    mail:"abc@gmail.com'"
}
const TeachingSupport = {
    isAvailable:false 
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}


Teacher.__proto__=User

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "vishal        "
String.prototype.trueLength = function () {
    console.log(`${this}`);
   
    console.log(`True Length is : ${this.trim().length}`);
}

    anotherUsername.trueLength()

    "vishal kumar has some future and planning on which he is working on ".trueLength()