/*
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/
let fruits = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry", "blue"],
  ["orange", "orange"],
  ["lemon", "yellow"]
]);
for(let key of fruits.keys()) {
  console.log(`Ключ - ${key}, значение - ${fruits.get(key)}`);
};
