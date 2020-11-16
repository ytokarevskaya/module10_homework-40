/*
  Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
*/
//let randomArray = ["432423", 1, "432432", null, undefined, "§32432", true];
let min = 0, max = 20;
let randomArrayLength = Math.floor(Math.random() * (max - min + 1) + min); //inclusive max & min
let randomArray = Array.from({ length: randomArrayLength }, () => Math.floor(Math.random() * (max - min + 1) + min)); //ES6
console.log(`Array length: ${randomArray.length}`);
//randomArray.forEach(function(el, i) { console.log(`${i + 1}: ${el}`) });  //pure
randomArray.forEach((el, i) => { console.log(`${i + 1}: ${el}`); });             //ES6
