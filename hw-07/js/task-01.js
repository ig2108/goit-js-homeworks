'use strict';

const log = function(item) {
  console.log(item);
};

const categories = document.querySelector('ul#categories');
const items = document.querySelectorAll('li.item');
const itemNames = document.querySelectorAll('h2.item-name');
const itemListElements = document.querySelectorAll('.item-list');

log(`В списке ${items.length} категории`);

const itemNamesCount = function(items) {
  for (let i = 0; i < items.length; i += 1) {
    log(`Категория: ${itemNames[i].textContent}
    Количество элементов: ${itemListElements[i].children.length}`);
  }
};

itemNamesCount(items);
