class User {
    constructor (username){
        this.username = username
    }

    logMe (){
        console.log(`Username is ${this.username}`);
    }

    static reateId(){
        console.log(`123`); 
    }

   
}

// const a =  User.reateId()
// console.log(a);

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()

// console.log(iphone.createId());