'use strict';

let cost = 0;
let message;
const country = prompt('Введите страну в которую нужно доставить товар:');

switch (country.toUpperCase()) {
  case 'КИТАЙ':
    cost = 100;
    break;

  case 'ЧИЛИ':
    cost = 250;
    break;

  case 'АВСТРАЛИЯ':
    cost = 170;
    break;

  case 'ИНДИЯ':
    cost = 80;
    break;

  case 'ЯМАЙКА':
    cost = 120;
    break;

  default:
    message = 'Доставка в вашей стране недоступна';
}

if (cost !== 0) {
  message = `Доставка в  ${country}, будет стоить ${cost} кредитов!`;
}
alert(message);
