'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let numberOfDroids = prompt(
  'Введите  количество дроидов, которые вы хотите купить:',
);
let message;
let totalPrice;
if (numberOfDroids === null) {
  message = 'Отменено пользователем!';
} else {
  totalPrice = numberOfDroids * pricePerDroid;
  if (totalPrice < credits) {
    credits = credits - totalPrice;
    message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits}  кредитов.`;
  } else {
    message = 'Недостаточно кредитов!';
  }
}

alert(message);
