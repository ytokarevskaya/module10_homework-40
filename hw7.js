/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/
let arrayLength = 10;
let min = 0, max = 10;
let randomArray = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * (max - min + 1) + min));
randomArray.push("test", "+", null, "13test", "+%53iuj");
randomArray.unshift(NaN, true, false, undefined, "25");
let oddCount = evenCount = zeroCount = 0;
console.log(randomArray);
randomArray.forEach((el) => {
  if(isNaN(el) || typeof el !== 'number') return;
  (el % 2 == 0) ? (el == 0 ? zeroCount++ : evenCount++) : oddCount++;
  }
);
console.log(`even count: ${evenCount}; odd count: ${oddCount}; zeroes count: ${zeroCount}`);

// Решение не совсем верное, т.к. не все значения учитываются правильно (например, строки содержащие числа или булевы значения). Чтобы этого избежать, нужно отсеивать все значения, которые не относятся к типу number, а также значения NaN. Выше исправила