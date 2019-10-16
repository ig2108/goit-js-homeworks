'use strict';

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking ${action.name} operation on ${itemName}`);
  const boundAction = action.bind(inventory);
  boundAction(itemName);
};

invokeInventoryAction('Аптечка', inventory.add);
// Invoking add operation on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction('Фильтр', inventory.remove);
// Invoking remove operation on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
