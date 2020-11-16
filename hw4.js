 /*
 Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
 */
 let min = 0, max = 100;
 let x = Math.floor(Math.random() * (max - min + 1) + min); //inclusive max & min
 console.log(x);
