'use strict'

// =============================================================================
// Задание 2
// =============================================================================
/**
 * Перевернуть строку
 * Написать функцию которая возвращает перевернутую строку
 */

function reverseString(str) {
    const original = str
        .toLowerCase()
        .replace(/ /g, '');

    const reversed = original
        .split('')
        .reverse()
        .join('');

    console.log(reversed);
}

reverseString('hello'); // "olleh".
reverseString('Howdy'); // "ydwoH".
reverseString('Greetings from Earth'); // "htraE morf sgniteerG".