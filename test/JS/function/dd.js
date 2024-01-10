// const chai = function () {
//     let username  = "kane"
//     console.log(this.username);
// }

// chai()
const chai = () => {
    let username  = "kane"
    console.log(this.username);
}

chai()