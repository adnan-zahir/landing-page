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
        <div class="carousel__bg-modal" id="carousel_${num}-modal">
            <div class="carousel__modal-content">
                <h3>${item.name}</h3>
                <span>${item.price}</span>
                <p>${item.longdesc}</p>
                <button class="modal__order-button">ORDER</button>
            </div>
        </div>
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

$('.carousel__desc .card').on('click', (e) => { // popup window
  const id = $(e.target).attr('id');
  $(`.carousel__bg-modal#${id}-modal`)
    .css('display', 'flex');
  $('.carousel__bg-modal').on('click', () => {
    $(`.carousel__bg-modal#${id}-modal`)
      .css('display', 'none');
  });

  $('.modal__order-button').on('click', () => $('.call-to-action').click());
});
