/*
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/
let arrayLength = 10;
let min = 0, max = 10;
let randomArray = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * (max - min + 1) + min));
let  = randomArray.filter(function(el, index, newArray) {
  return newArray.indexOf(el) == index;
});
console.log(randomArray, uniqueArray);
let randomArrayLength = parseInt(randomArray.length),
    uniqueArrayLength = parseInt(uniqueArray.length);
console.log(randomArrayLength == uniqueArrayLength ? "true" : "false");
console.log(uniqueArrayLength == 1 ? "все элементы в массиве одинаковы" : "не все элементы в массиве одинаковы");

// В целом задача решена верно, но решение не очень оптимальное, т.к. в вашем случае при создании второго массива (uniqueArray) часть данных копируется, это избыточное использование ресурсов. Можно решить задачу более оптимально:

let array = [1, 1, 1, 2];
let isEqual = true;

for (let i = 1; i < array.length; i++) {
  if (array[0] !== array[i]) {
    isEqual = false;
    break;
  }
}

console.log(isEqual? "все элементы в массиве одинаковы" : "не все элементы в массиве одинаковы");