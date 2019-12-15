'use strict'

let input;
const numbers = [];
let total = 0;

do {

    input = prompt("enter numbers");

    let num = Number(input);
    if (isNaN(num)) {
        alert("Not a number, try again!")
    } else if (num > 0) {
        numbers.push(num);
    }
} while (input !== null);

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log(numbers)
console.log(`Общая сума чисел в массиве равна ${total}`)