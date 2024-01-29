class User{
  constructor(email,password){
    this.email = email;
    this.password = password 
  }  


  get email(){
    return this._email.toUpperCase()
  }

  set email(mail){
    return this._email = mail
  }
  get password(){
    return this._password+123
  }

  set password(value){

    this._password = value
  }
}

const user1 = new User("abce@gmail.com","ab12")
console.log(user1.email);
