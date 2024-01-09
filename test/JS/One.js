
 const marvel_heros= ["iron man","thor","captain america","black panther","spider man"]
 const dc_heros =["superman","flash","batman"]

 marvel_heros.push(dc_heros)
//  console.log(marvel_heros); 
marvel_heros.pop(dc_heros)
// console.log(marvel_heros);
const heros= marvel_heros.concat(dc_heros)
// console.log(heros);


const  all_heros = [...marvel_heros,...dc_heros]
// console.table(all_heros);

const another_array = [1,2,3,4,[7,6,8],[4,3,2,1,[4,5,6,7]]]

const single_array =another_array.flat(Infinity)
 console.log(single_array);

console.log(Array.from("vishal"))

const obj ={name:"vishal"};
const valueArray = Object.values(obj);
console.log(valueArray);
console.log(Array.of("vishal"));

console.log(Array.from("vishal"));

