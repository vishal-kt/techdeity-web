function calculationCartPrice(...num1) {
    return num1
}

// console.log(calculationCartPrice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


const user = {
    username:"vishal kumar",
    price:222
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

const myArray = [1,2,3,4,5,6,7,8,9,10];
function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myArray));