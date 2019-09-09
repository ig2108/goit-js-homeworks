'use strict';

let total = 0;
let userInput;
let userInputNumber;

do {
  userInput = prompt('Введите число!');

  userInputNumber = Number(userInput);

  const userInputIsNan = Number(isNaN(userInputNumber));

  if (userInputIsNan) {
    alert('Было введено не число, попробуйте еще раз');

    userInputNumber = 0;
    total += userInputNumber;
  } else {
    total += userInputNumber;
  }
} while (userInput !== null);

alert(`Общая сумма чисел равна ${total}`);
