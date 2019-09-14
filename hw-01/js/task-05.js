'use strict';

const CHINA = 'китай';
const CHILI = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';

const promtLabel = 'Введите страну доставки';

const userInput = prompt(promtLabel);
let userInputToLow;

if (userInput === null) {
  userInputToLow = userInput;
} else {
  userInputToLow = userInput.toLowerCase();
}

let message;
let country;
let price;

if (userInputToLow === null) {
  message = 'Отменено пользователем!';
} else {
  switch (userInputToLow) {
    case CHINA:
      country = 'Китай';
      price = 100;

      break;

    case CHILI:
      price = 250;
      country = 'Чили';
      break;

    case AUSTRALIA:
      price = 170;
      country = 'Австралию';
      break;

    case INDIA:
      price = 80;
      country = 'Индию';
      break;

    case JAMAICA:
      price = 120;
      country = 'Ямайку';
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);
