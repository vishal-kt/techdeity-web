// class User {

//     constructor(username , email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//        return ` ${this.password}abcde+122` 
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmai.com","123")
// console.log(chai.changeUsername());
// console.log(chai.encryptPassword());


function Userw(username,email, password) {
    
    this.username = username;
    this.email = email ;
    this.password = password
}

Userw.prototype.encryptPassword = function () {
    
    return `${this.password}abc+2342`
}


Userw.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new Userw("vishal","vishal@mail.com",12211)
console.log(tea);
console.log(tea.changeUsername());
console.log(tea.encryptPassword());