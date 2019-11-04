'use strict';

const log = function(item) {
  console.log(item);
};

const ingredientsList = document.querySelector('ul#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = function(array) {
  const containerList = document.createElement('div');
  containerList.classList.add('container-list');
  array.map(el => {
    const item = document.createElement('li');
    item.textContent = el;
    containerList.append(item);
  });
  return containerList;
};

const ingredientsItems = createList(ingredients);

ingredientsList.append(ingredientsItems);
