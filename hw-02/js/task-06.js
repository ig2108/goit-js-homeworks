'use strict';

let total = 0;
const numbers = [];
let input;
input = prompt('Введите число');

while (input !== null) {
  const inputNumber = Number(input);
  const isNanInput = isNaN(inputNumber);
  if (!isNanInput) {
    numbers.push(inputNumber);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }

  input = prompt('Введите число');
}

const summ = function(numbers) {
  for (let number of numbers) {
    total += number;
  }

  return total;
};

total = summ(numbers);

const message = `Общая сумма чисел равна ${total}.`;

console.log(message);
