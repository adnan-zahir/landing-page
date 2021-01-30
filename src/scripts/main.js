import $ from 'jquery';

// Call to action (scroll to menu)
const $callToActon = $('.call-to-action');

$callToActon.on('click', () => {
  $('section').css('display', 'grid');
  $([document.documentElement, document.body]).animate({
    scrollTop: $('.menus').offset().top,
  }, 200, 'swing');
  $(document.body).css('overflow', 'auto');
});

// simulate click if modal button pressed
$('.modal__order-button').on('click', () => $callToActon.click());

// input number
$(() => {
  $('.input-number > button').on('click', (e) => {
    const $target = $(e.target);
    const input = $target.parent().find('input');
    // eslint-disable-next-line radix
    const currentVal = parseInt(input.val());

    if ($target.text() === '+') input.val(currentVal + 1);
    else if ($target.text() === '-' && currentVal > 0) input.val(currentVal - 1);
    else input.val(0);
  });
});
