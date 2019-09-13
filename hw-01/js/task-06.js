'use strict';

let total = 0;
let userInput;

while (userInput !== null) {
  userInput = prompt('Введите число!');
  const userInputNumber = Number(userInput);

  const userInputIsNan = isNaN(userInputNumber);

  if (!userInputIsNan) {
    total += userInputNumber;
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}

alert(`Общая сумма чисел равна ${total}`);
