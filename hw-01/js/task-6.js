'use strict';

let input;
let total = 0;
let result;

do {
  input = Number(prompt('Введите  число'));
  if (Number.isNaN(input)) {
    alert('Это не число, попробуйте еще раз');
    input = Number(prompt('Введите  число'));
  }
  total += input;
} while (input !== 0);

console.log(total);
alert(`Сумма вводимых чисел ${total}!`);
