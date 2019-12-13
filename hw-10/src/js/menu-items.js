import menuItems from '../menu.json';
import menuItemTemplate from '../templates/menu-item.hbs';

const refs = {
  menu: document.querySelector('ul.js-menu'),
};

function buildMenu(menuItems) {
  const markup = menuItems.map(menuItem => menuItemTemplate(menuItem)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuItems);
