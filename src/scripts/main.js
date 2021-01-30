/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable radix */
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

    // get "TOTAL PESANAN"
    let totalVal = 0;

    $('.input-number input').each(function () {
      totalVal += parseInt(this.value);
    });

    // set "TOTAL PESANAN"
    $('button.order-button > span#jumlah-pesan').text(`${totalVal} Pesanan`);

    // get "TOTAL HARGA"
    let totalPrice = 0;

    $('.menu__item').each(function () {
      const val = $(this).find('.input-number input').val();
      const price = $(this).find('.menu__price').text().slice(0, -1);
      const subTotal = parseInt(val) * parseInt(price);
      totalPrice += subTotal;
    });

    // set "TOTAL HARGA"
    $('button.order-button > span#jumlah-harga').text(`${totalPrice}K`);
  });
});
