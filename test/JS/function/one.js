
function loginUserMessage(username) {
    return `${username} is logged in now.`
}

const loginUser = loginUserMessage("Vishal Kumar")
// console.log(loginUser);


function loggedUser(username) {
    if(username===undefined)
    {
        console.log("Please enter a username");
    }
    return `${username} is logged in now.`
}

console.log(loggedUser());