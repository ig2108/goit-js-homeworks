'use strict';

function checkForSpam(string) {
  const strLowCase = string.toLowerCase();

  const words = strLowCase.split(' ');

  let isSpam = false;

  for (let word of words) {
    if (word.includes('spam') || word.includes('sale')) {
      isSpam = true;
      break;
    }
  }

  return isSpam;
}

let text = 'Latest technology news';
console.log(checkForSpam(text));

text = 'JavaScript weekly newsletter';
console.log(checkForSpam(text));

text = 'Get best sale offers now!';
console.log(checkForSpam(text));

text = '[SPAM] How to earn fast money?';
console.log(checkForSpam(text));
