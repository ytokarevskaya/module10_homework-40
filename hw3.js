/*
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/
let str = prompt("Введите строку");
let reverseStr = str.split("").reverse().join("");
alert(reverseStr);
