const user = {
    username:"vishal",
    loginCount:5,
    signedIn:true,
    getUserName:function() {
        return `Username is ${this.username} and his loginCount is ${this.loginCount}`
        
    }
}

console.log(user.getUserName());