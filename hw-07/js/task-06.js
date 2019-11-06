'use strict';

const log = function(item) {
  console.log(item);
};

const refs = {
  elem: document.querySelector('#validation-input'),
};

const state = {
  valid: '',
};

const selectValidClass = (parent, length) =>
  parent.value.length === +length ? 'valid' : 'invalid';

function inputValidation() {
  const parent = refs.elem;
  const { length } = parent.dataset;
  const current = selectValidClass(parent, length);
  if (state.valid && current !== state.valid) {
    parent.classList.remove(state.valid);
  }
  state.valid = current;
  parent.classList.add(state.valid);
}

refs.elem.addEventListener('blur', inputValidation);
