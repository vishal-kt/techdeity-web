function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        return `Welcome ${this.username}`
    }
}

const userOne = new User("vishal",23,false)

if(userOne instanceof User){
    console.log('yes beta');
}
else{
    console.log('nhi beta');
}
console.log(userOne.greeting());
console.log(userOne.constructor);
