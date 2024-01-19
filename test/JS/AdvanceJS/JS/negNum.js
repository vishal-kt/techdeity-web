const a = [1,2,-3,4,-5,6,-8,44,123,543,-69]

function filterNegative(arr, callbackfun) {
    const negNum = arr.filter(callbackfun);
    return negNum;
}

const neg = (num)=>{
    return num<0
}

const res = filterNegative(a , neg)
console.log(res);