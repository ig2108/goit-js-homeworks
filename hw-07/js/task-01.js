'use strict';

const log = function(item) {
  console.log(item);
};

const categories = document.querySelector('#categories');

const res = categories.children.length;
log(`В списке ${res} категории`);

const str = [...categories.children]
  .map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
  .join('\n');

log(str);
