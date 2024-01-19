const calculate = (a,b,ops)=>{return ops(a,b);}

const add = (a,b)=>a+b;

const addResult = calculate(22,31,add);
console.log(addResult);

const sub = (a,b)=>a-b;

const subResult = calculate(8,3,sub)
console.log(subResult);