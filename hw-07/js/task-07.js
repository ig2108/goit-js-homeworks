'use strict';

const log = function(item) {
  console.log(item);
};
const refs = {
  fontControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.fontControl.setAttribute('min', 12);
refs.fontControl.setAttribute('max', 48);
refs.fontControl.setAttribute('step', 2);

const changeFontSize = function(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

refs.fontControl.addEventListener('input', changeFontSize);
