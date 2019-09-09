'use strict';

const CHINA = 'китай';
const CHILI = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';

const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

const promtLabel = 'Введите страну доставки';

const userInput = prompt(promtLabel);
let userInputToLow;

if (userInput === null) {
  userInputToLow = userInput;
} else {
  userInputToLow = userInput.toLowerCase();
}

let message;

if (userInputToLow === null) {
  message = 'Отменено пользователем!';
} else {
  switch (userInputToLow) {
    case CHINA:
      message = `Доставка в ${CHINA} будет стоить ${priceChina} кредитов`;
      break;

    case CHILI:
      message = `Доставка в ${CHILI} будет стоить ${priceChili} кредитов`;
      break;

    case AUSTRALIA:
      message = `Доставка в ${AUSTRALIA} будет стоить ${priceAustralia} кредитов`;
      break;

    case INDIA:
      message = `Доставка в ${INDIA} будет стоить ${priceIndia} кредитов`;
      break;

    case JAMAICA:
      message = `Доставка в ${JAMAICA} будет стоить ${priceJamaica} кредитов`;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}

console.log(message);
