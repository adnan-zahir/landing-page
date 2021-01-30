import $ from 'jquery';
import DATA from './data/menu-data';

// eslint-disable-next-line prefer-destructuring
const items = DATA.items;

items.forEach((item) => {
  $('.menu-list').append(`
  <div class="menu__item">
    <div class="menu__img">
        <img src="./images/menu/${item.image}" alt="Menu">
    </div>
    <div class="menu__name">${item.name}</div>
    <div class="menu__price">${item.price}</div>
    <div class="input-number">
        <button>+</button>
        <input type="number" value="0" min="0">
        <button>-</button>
    </div>
  </div>
  `);
});
