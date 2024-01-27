const user = {
    username:"vishal",
    loginCount:5,
    signedIn:true,
    getUserName:function() {
        return `Username is ${this.username} and his loginCount is ${this.loginCount}`
        
    }
}
console.log(user.getUserName());

const user2 = {
    username:"vishal",
    loginCount:5,
    signedIn:true,
    getUserName:function() {
        return `Username is ${this.username} and his loginCount is ${this.loginCount}`
        
    }
}

const s = new user2
console.log(s);