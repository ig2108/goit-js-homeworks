'use strict';

const formatString = function(string, value = 40) {
  return string.length > value ? `${string.slice(0, value)}...` : string;

  // Второй вариант (хуже):
  // let stringFormat = string.split('');

  // if (stringFormat.length > 40) {
  //   stringFormat.length = 40;
  //   stringFormat[40] = '...';
  // }

  // string = stringFormat.join('');
  // return string;
};

let text = 'Curabitur ligula sapien, tincidunt non.';
console.log(formatString(text));

text = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
console.log(formatString(text));

text = 'Curabitur ligula sapien.';
console.log(formatString(text));

text = 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.';
console.log(formatString(text));
