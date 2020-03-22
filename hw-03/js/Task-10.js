'use strict'
// =============================================================================
// Задание 10
// =============================================================================
/**
 * Напишите пример замыкания
 * Например счетчик
 */

function newCounter() {
    let count = 0

    return function () {
        console.log(count += 1);
    }
}

const counter1 = newCounter();
const counter2 = newCounter();
const counter3 = newCounter();

counter1(); // 1
counter1(); // 2
counter1(); // 3

counter3(); // 1
counter3(); // 2
counter3(); // 3
counter3(); // 4

counter2(); // 1
counter2(); // 2