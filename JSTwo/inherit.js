class User {
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{

    constructor (username,email, id){
        super(username)
        this.email = email
        this.password = this.password
    }
    addCourse(){
        console.log(` A new Course was added by ${this.username}`);
    }
}


const t1 = new Teacher("vishal","vishal@teacher.ac.in",155)
t1.logMe()
t1.addCourse()
const u1 = new User("ravi")
u1.logMe()