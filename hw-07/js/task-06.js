'use strict';

const log = function(item) {
  console.log(item);
};
const input = document.querySelector('input#validation-input');
const lengthAr = document.querySelector('#validation-input[data-length="6"]');

const length = lengthAr.getAttribute('data-length');

const validateLength = function(event) {
  if (event.currentTarget.value.length < length) {
    alert('Введите не мешьне 6 символов');
    event.currentTarget.classList.add('invalid');
  } else {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  }
};

input.addEventListener('blur', validateLength);
