const User = {
    _email :"abc@mail.com",
    _pass :"avc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value)
    {
        return this._email = value
    }


}

const tea= Object.create(User)
console.log(tea.email);



