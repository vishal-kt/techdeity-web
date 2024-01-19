const ticket = new Promise(function (resolve,reject) {
    const isBoarded= true;
    if (isBoarded) {
        resolve('you re not in ');

    }else{
        reject("your flight has been cancelled")
    }
})

ticket.then((data)=>{console.log("wojjj",data);})
    .catch((data)=>{console.log('ohhh',data);})
    .finally(()=>{console.log('this run bcz this is in final block');})