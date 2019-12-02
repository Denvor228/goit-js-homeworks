'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

var a = prompt('Пожалуйста, введите пароль!');
console.log(a);
if (a === null) {
  message = 'Отменено пользователем!';
} else {
  if (a === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else if (a !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
  }
}

alert(message);
