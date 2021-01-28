/* eslint-disable import/no-unresolved */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable no-console */
import $ from 'jquery';

$('.jumbotron__filter__logo').on('click', () => { // slide up filter
  $('.jumbotron__filter').toggleClass('open');
});
