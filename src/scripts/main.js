import $ from 'jquery';

const $callToActon = $('.call-to-action');

$callToActon.on('click', () => {
  $('section').css('display', 'grid');
  $([document.documentElement, document.body]).animate({
    scrollTop: $('.menus').offset().top,
  }, 200, 'swing');
  $(document.body).css('overflow', 'auto');
});
