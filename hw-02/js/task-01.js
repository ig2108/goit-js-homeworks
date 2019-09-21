'use strict';

const logItems = function(array) {
  // Первый вариант решения:
  // for (let i = 0; i < array.length; i += 1) {
  //   let count = i + 1;
  //   console.log(`[${count}] \- [${array[i]}]`);
  // }

  for (let elem of array) {
    let count = array.indexOf(elem) + 1;
    console.log(`[${count}] \- [${elem}]`);
  }
};

const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(names);

logItems(numbers);
