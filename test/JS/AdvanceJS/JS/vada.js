// const promiseOne = new Promise(function (resolve,reject) {
    
//     setTimeout(() => {
//         console.log('some async task is completed');
//         resolve()
//     }, 1000);
// })

// promiseOne.then(()=>{
//     console.log("promise Consumed");
// })


// const promiseTwo = new Promise (function (resolve ,reject) {
//     setTimeout(() => {
//         resolve({username :"vishal", email:"vk@mail.com"})
//     }, 1000);
// })

// promiseTwo.then(function (user) {
//     console.log(user);
// })


const promiseThree = new Promise (function (resolve,reject) {
    setTimeout(() => {
        let error = false   
        if(!error){
            resolve({username:"vishal Kumar",password:"123@"})
        }    else{
            reject('ERROR:Something Went wrong')
        }
    }, 1000);
})

promiseThree.then((user)=>{

    console.log(user);
    return user.username
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("This is Final");
})
