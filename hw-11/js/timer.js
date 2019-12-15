'use strict';

import refs from './refs.js';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  timeToTargetDate() {
    const timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.updateTime(this.calculateTime(deltaTime));
    }, 1000);
  }
  updateTime(obj) {
    refs.dayValue.textContent = obj.days;
    refs.hoursValue.textContent = obj.hours;
    refs.minsValue.textContent = obj.mins;
    refs.secsValue.textContent = obj.secs;
  }
  calculateTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    const obj = {
      days,
      hours,
      mins,
      secs,
    };
    return obj;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timeToNewY = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2020'),
});

document.addEventListener('DOMContentLoaded', timeToNewY.timeToTargetDate());
