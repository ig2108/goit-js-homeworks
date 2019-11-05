'use strict';

const log = function(item) {
  console.log(item);
};

const fontControl = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

fontControl.setAttribute('min', 12);
fontControl.setAttribute('max', 48);
fontControl.setAttribute('step', 2);

console.dir(fontControl);

const changeFontSize = function(event) {
  log(event.currentTarget.value);
  text.style.fontSize = `${event.currentTarget.value}px`;
};

fontControl.addEventListener('input', changeFontSize);
