/* eslint-disable no-console */
import $ from 'jquery';
import DATA from './carousel-data';

// eslint-disable-next-line prefer-destructuring
const items = DATA.items;

const renderCarouselItems = () => {
  items.forEach((item) => {
    console.log(item.image);
    $('.carousel').append(`
      <div class="carousel__item">
        <img src="./images/${item.image}" alt="menu" class="carousel__img">
      </div>
    `);
  });
};

const setCarouselWidth = () => {
  $('.carousel').css('grid-template-columns',
    `repeat(${items.length}, 100vw)`);

  renderCarouselItems();
};

setCarouselWidth();
