function User(username, loginCount,isLoggedIn) {
    this.username=username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

}  
const userOne = new User("vishal",22, true)
console.log(userOne);

const userTwo = new User("ChaiandCode",33,false)
console.log(userTwo);