/* eslint-disable prefer-arrow-callback */
import $ from 'jquery';

$(() => {
  $('button.order-button').on('click', () => {
    const $menuItems = $('.menu__item');

    let completeMessage = 'Halo%2C%20saya%20ingin%20memesan:';

    $menuItems.each(function () {
      const menuName = $(this).find('.menu__name').text().replace(/ |\n/g, '%20');
      const menuTotal = $(this).find('.input-number input').val();

      const subMessage = `%0A${menuName}%20x${menuTotal}`;
      completeMessage += subMessage;
    });

    const whatsappNum = '6287815170995';
    const whatsappUrl = 'https://wa.me/';

    window.open(`${whatsappUrl}${whatsappNum}?text=${completeMessage}`);
  });
});
