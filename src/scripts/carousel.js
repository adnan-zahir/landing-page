/* eslint-disable no-console */
import $ from 'jquery';
import DATA from './data/carousel-data';

// eslint-disable-next-line prefer-destructuring
const items = DATA.items;

const renderCarouselItems = () => {
  let num = 1;
  items.forEach((item) => {
    $('.carousel__inner').append(`
      <div class="carousel__item">
        <img src="./images/${item.image}" alt="menu" class="carousel__img">
        <div class="carousel__desc">
          <div class="card" id="carousel_${num}">
            <h3 id="carousel_${num}">${item.name}</h3>
            <p id="carousel_${num}">${item.desc}</p>
          </div>
        </div>
      </div>
    `);
    num += 1;
  });
};

const setCarouselWidth = () => {
  $('.carousel__inner').css('grid-template-columns',
    `repeat(${items.length}, 100%)`);

  renderCarouselItems();
};

const scrollRight = () => {
  const scrollDistance = $('.carousel__item').width();
  $('.carousel__inner').animate({ scrollLeft: `+=${scrollDistance}` }, 500, 'swing');
};

const scrollToFirst = () => {
  const scrollDistance = $('.carousel__item').width();
  $('.carousel__inner').animate({ scrollLeft: `-=${scrollDistance * items.length}` }, 500, 'swing');
};

$(() => { // auto scrolling carousel
  const carouselLen = items.length;
  const interval = 5000;
  setInterval(() => {
    scrollRight();
  }, interval);
  setInterval(() => {
    scrollToFirst();
  }, interval * carouselLen);
});

setCarouselWidth();
