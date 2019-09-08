'use strict';

const credits = 23580;

const pricePerDroid = 3000;

const quantity = prompt(
  'Введите необходимое количество дроидов, которое Вы хотите купить',
);

let message;

const totalPrice = pricePerDroid * quantity;

const differAfterPay = credits - totalPrice;

const needToAdd = totalPrice - credits;

const possibleToBuy = totalPrice <= credits;

if (quantity === null) {
  message = 'Отменено пользователем';
} else {
  if (possibleToBuy) {
    message = `Вы купили ${quantity} дроидов, на счету осталось ${differAfterPay} кредитов.`;
  } else {
    message = `Недостаточно средств на счету! Необходимо пополнить счет на ${needToAdd} кредитов.`;
  }
}

console.log(message);
