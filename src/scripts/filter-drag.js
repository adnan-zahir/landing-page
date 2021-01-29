/* eslint-disable import/no-unresolved */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable no-console */
import $ from 'jquery';

$('.jumbotron__filter__logo').on('click', () => { // slide up filter
  $('.jumbotron').toggleClass('open');
});

$(document.body).on('mousemove', () => {
  let timeout;
  if (!$('.carousel__button__container').hasClass('visible')) { // if button transparent
    $('.carousel__button__container').addClass('visible'); // button visible
    $('.header__inner').addClass('active'); // header bgColor white
    timeout = 2000;
    setTimeout(() => { // 2 second without mouse activity
      $('.carousel__button__container').removeClass('visible'); // button transparent
      $('.header__inner').removeClass('active'); // header transparent
    }, timeout);
  }
});
