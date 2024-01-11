 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const newNums1 = nums.filter((num) => num%2 === 0);
const newNums = nums.filter((nums)=>{
    return nums>3
})
    console.log(newNums); // [2, 4, 6, 8]

// using for each loop

const newNumsforeach = [];
nums.forEach((nums)=>{

    if(nums>6){
        newNums.push(nums)
    }
})

console.log(newNumsforeach);
