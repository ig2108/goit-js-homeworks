'use strict';

const refs = {
  body: document.querySelector('.body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  dayValue: document.querySelector('.value[data-value="days"]'),
  hoursValue: document.querySelector('.value[data-value="hours"]'),
  minsValue: document.querySelector('.value[data-value="mins"]'),
  secsValue: document.querySelector('.value[data-value="secs"]'),
};

export default refs;
