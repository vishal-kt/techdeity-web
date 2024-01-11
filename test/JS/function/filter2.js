const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.map((num)=>num+10)

// const newNums1 = myNums
//                     .map((num)=>num*3)
//                     .map((num)=>num+22)
//                     .filter((num)=>num >=40)
// console.log(newNums1);


const arr = [1,2,3,4,5,6,7,8,9,10]
const initial = 0
const sum = arr.reduce((acc,currentval )=>acc+currentval,initial)
// console.log(sum);

const arr2 = [1,2,3]
const total = arr2.reduce (function (acc,currentval) {
    // console.log(`acc is ${acc} and currentval is ${currentval}`);
    return acc+currentval
},0)
// console.log(total);

const shoppingCart = [
    {
        item: 'shirt',
        price: 500,
        quantity: 1

    },
    {
        item: 'TOY',
        price: 522,
        quantity: 1

    },
    {
        item: 'chaddi',
        price: 100,
        quantity: 4

    },
    {
        item: 'jeans',
        price: 1000,
        quantity: 2

    },
    {
        item: 'bra',
        price: 250,
        quantity: 3

    },
]


const totalAmount = shoppingCart.reduce((acc,item)=>{
    return item.price * item.quantity+acc     
},0)

console.log(` price to pay is ${totalAmount}`);