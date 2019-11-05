'use strict';

const log = function(item) {
  console.log(item);
};

const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

const greeting = function(event) {
  if (event.currentTarget.value === '') {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = event.currentTarget.value;
  }
};

input.addEventListener('input', greeting);
