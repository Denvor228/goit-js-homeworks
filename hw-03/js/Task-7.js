'use strict'

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,
    id: 0,
    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        const transactionObject = {
            amount,
            type,
            id: this.id++,
        }
        return transactionObject;
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.createTransaction(amount);
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
        this.balance = this.balance + amount;
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        this.createTransaction(amount);
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
        if (amount > this.balance) {
            console.log('Снятие такой суммы невозможно, недостаточно средств!')
        } else {
            this.balance = this.balance - amount;
        }
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance(balance) {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {},
};

console.log(account.createTransaction(10, Transaction.DEPOSIT));
account.deposit(10);
account.deposit(15);
account.deposit(20);
account.getTransactionDetails(2);
console.log(account.createTransaction(10, Transaction.WITHDRAW));
account.getTransactionDetails(2);
console.log(account.getBalance());
account.withdraw(20);
account.withdraw(10);
console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account);
account.deposit(20);
account.deposit(20);
console.log(account.getTransactionDetails(8));
console.log(account.transactions);