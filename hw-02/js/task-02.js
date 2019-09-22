'use strict';

const priceOfGraffity = function calculateEngravingPrice(
  message,
  pricePerWord,
) {
  return message.split(' ').length * pricePerWord;
  // Второй вариант решения (хуже):
  // const words = message.split(' ');
  // const totalPrice = words.length * pricePerWord;
  // return totalPrice;
};

let text = 'Proin sociis natoque et magnis parturient montes mus';
let price = 10;

console.log(priceOfGraffity(text, price));

text = 'Proin sociis natoque et magnis parturient montes mus';
price = 20;

console.log(priceOfGraffity(text, price));

text = 'Donec orci lectus aliquam est';
price = 40;

console.log(priceOfGraffity(text, price));

text = 'Donec orci lectus aliquam est';
price = 20;

console.log(priceOfGraffity(text, price));
