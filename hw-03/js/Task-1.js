'use strict';

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,

};

const addMood = function (addMood) {
    user.mood = addMood;
};

const changeHobby = function (changeHobby) {
    user.hobby = changeHobby;
};

const changePremium = function (changePremium) {
    user.premium = changePremium;
};

addMood('happy');
changeHobby('skydiving');
changePremium('false');

const keys = Object.keys(user);

for (const key of keys) {
    console.log(` ${key} : ${user[key]}`);
}