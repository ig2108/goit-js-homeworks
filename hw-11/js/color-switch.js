'use strict';

import refs from './refs.js';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setBgColor(arr) {
  refs.body.style.backgroundColor =
    arr[randomIntegerFromInterval(0, arr.length)];
  // console.log(refs.body);
}

const changeColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.timerId = setInterval(() => {
      setBgColor(colors);
    }, 1000);
    console.log('change color starting');
  },
  stop() {
    if (!this.isActive) {
      return;
    }
    clearInterval(this.timerId);
    this.isActive = false;
    console.log('change color stopping');
  },
};

refs.startBtn.addEventListener('click', changeColor.start.bind(changeColor));
refs.stopBtn.addEventListener('click', changeColor.stop.bind(changeColor));
