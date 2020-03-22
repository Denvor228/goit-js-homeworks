'use strict'

const findLongestWord = function (string) {
    let arrStr = string.split(' ');
    let longestWord = arrStr[0];
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length > longestWord.length) {
            longestWord = arrStr[i];
        }
    }
    return longestWord;
};
// твой код


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'