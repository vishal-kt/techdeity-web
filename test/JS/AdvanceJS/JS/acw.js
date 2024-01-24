const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let err = true 
        if(!err){
            resolve({username:"java",code :"vk250"})
        }else{
            reject("Error : Something Went Wrong Horrible")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try{
        const res = await promiseFive
        console.log(res);
    }catch(err){
        console.log(err);
    }finally{
        console.log("this will run no matter what");
    }
 }

 consumePromiseFive()

 async function getAllUser() {
    try {
        const res = await fetch('https://api.github.com/users/vishal-kt')
        const data = await res.json()
        console.log(data.login);
    } catch (error) {
        console.log("E:" ,error);
    }
 }

 getAllUser()
