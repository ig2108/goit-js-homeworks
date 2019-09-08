'use strict';

const total = 100;

const ordered = 50;

let compare = ordered <= total;

let message;

if (compare) {
  message = '"Ваш заказ оформлен, с вами свяжется менеджер"';
} else {
  message = '"На складе недостаточно товаров!"';
}

console.log(message);

message = compare? '\"Ваш заказ оформлен, с вами свяжется менеджер\"' : '\"На складе недостаточно товаров!\"';

console.log(message);