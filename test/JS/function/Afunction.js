const user ={
    username:"rahul kumar",
    price :555,
    welcomeMessage :function () {
        console.log(`${this.username} welcome to the course and your price is ${this.price}`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username ="sam"
user.welcomeMessage()
user.username ="rahul"