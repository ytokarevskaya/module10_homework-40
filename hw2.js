/*
Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
*/
let x = 1;
//let x = true;
//let x = "test";
//let x = undefined;
if(typeof x === "number") {
  console.log("Это число");
}
else if(typeof x === "boolean") {
  console.log("Это логический тип");
}
else if(typeof x === "string") {
  console.log("Это строка");
}
else {
  console.log("Тип x не определён");
};
