'use strict';

const log = function(item) {
  console.log(item);
};

const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = function(array) {
  const items = [];
  array.map(el => {
    const item = document.createElement('li');
    item.textContent = el;
    items.push(item);
  });
  return items;
};

const ingredientsItems = createList(ingredients);

ingredientsList.append(...ingredientsItems);
