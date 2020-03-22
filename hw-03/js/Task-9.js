'use strict'

// =============================================================================
// Задание 9
// =============================================================================
/**
 * Создайте животного, млекопитающегося и собаки (наследование)
 * Напишите конструкторы Animal, Mammal и Dog
 * которые наследуются друг от друга.
 * Создайте свойства и методы для классов:
 *  Animal - limbs (конечности шт.) - number
 *  Mammal - isMammal (является млекопитающим) - boolean
 *  Dog - bark() (гав-гав) - function
 */

class Animal {
    constructor(limbs, isMammal) {
        this.limbs = limbs;
        this.isMammal = isMammal;
    }

    limbs() {
        this.limbs = 4
    }
}

class Mammal extends Animal {
    constructor(...props) {
        super(...props);
    }

    isMammal() {
        this.isMammal = true;
    }
}

class Dog extends Mammal {
    constructor(...props) {
        super(...props);
    }

    bark() {
        console.log('gav-gav')
    }
}

const dog = new Dog(4, true)

console.log(dog.limbs); // 4
console.log(dog.isMammal); // true
dog.bark(); // гав-гав