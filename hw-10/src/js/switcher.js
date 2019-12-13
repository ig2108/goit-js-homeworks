'use strict';

import storage from '../utils/storage';

const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('input.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const persistedTheme = localStorage.getItem('theme');
// const persistedTheme = storage.load('theme');

if (persistedTheme) {
  refs.body.classList.add(persistedTheme);
}
if (persistedTheme === Theme.DARK) {
  refs.switcher.checked = true;
}

refs.switcher.addEventListener('change', changeTheme);

function changeTheme() {
  switch (refs.switcher.checked) {
    case !refs.body.classList.contains(Theme.LIGHT || Theme.DARK):
      refs.body.classList.add(Theme.LIGHT);
    case (refs.switcher.checked = true):
      refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
      break;
    case (refs.switcher.checked = false):
      refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
      break;
  }
}
