// function User(email,password) {
//     this._email = email;
//     this._password = password 

// Object.defineProperty(this,'email',{
//     get :function () {
//         return this._email.toUpperCase()         
//     },
//     set: function (value) {
//         this._email = value
//     }
// })


// Object.defineProperty(this,'password',{
//     get :function () {
//         return this._password.toUpperCase()  
//     },
//     set: function (value) {
//         this._password = value
//     }
// })

// const user1  = new User("vk@gmail.com","54544")
// console.log(user1.email);

// }


function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value; // Fix: Use _email instead of this.email to avoid infinite recursion
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value; // Fix: Use _password instead of this.password to avoid infinite recursion
        }
    });
}

const user1 = new User("vk@gmail.com", "54544"); // Fix: Use 'new' keyword to create an instance of User
console.log(user1.email);
