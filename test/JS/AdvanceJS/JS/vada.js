const promiseOne = new Promise(function (resolve,reject) {
    
    setTimeout(() => {
        console.log('some async task is completed');
        resolve()
    }, 1000);
})

promiseOne.then(()=>{
    console.log("promise Consumed");
})


const promiseTwo = new Promise (function (resolve ,reject) {
    setTimeout(() => {
        resolve({username :"vishal", email:"vk@mail.com"})
    }, 1000);
})

promiseTwo.then(function (user) {
    console.log(user);
})