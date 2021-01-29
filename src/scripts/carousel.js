/* eslint-disable no-console */
import $ from 'jquery';
import DATA from './carousel-data';

// eslint-disable-next-line prefer-destructuring
const items = DATA.items;

const renderCarouselItems = () => {
  let num = 1;
  items.forEach((item) => {
    $('.carousel__inner').append(`
      <div class="carousel__item" id="carousel_${num}">
        <img src="./images/${item.image}" alt="menu" class="carousel__img">
      </div>
    `);
    num += 1;
  });
};

const setCarouselWidth = () => {
  $('.carousel__inner').css('grid-template-columns',
    `repeat(${items.length}, 100vw)`);

  renderCarouselItems();
};

const scrollRight = () => {
  const scrollDistance = $('.carousel__item').width();
  $('.carousel__inner').animate({ scrollLeft: `+=${scrollDistance}` }, 500, 'swing');
};

const scrollLeft = () => {
  const scrollDistance = $('.carousel__item').width();
  $('.carousel__inner').animate({ scrollLeft: `-=${scrollDistance}` }, 500, 'swing');
};

$(() => {
  $('.carousel__button--right').on('click', scrollRight);
  $('.carousel__button--left').on('click', scrollLeft);
});

setCarouselWidth();
