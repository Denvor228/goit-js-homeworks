'use strict'

const checkForSpam = function (message) {

    let firstWord = 'sale';
    let secondWord = 'spam';
    if (message.includes(firstWord) || message.includes(secondWord.toUpperCase())) {
        return true;
    } else {
        return false;
    }

    // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true