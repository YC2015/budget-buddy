$(document).ready(function(){
  $('.not-index-main').hide();
  $('#home').show();
});

$('.main-nav').on('click','li', function(){
  var $reveal = $(this).data('tab');
  $('.post-it').hide();
  $('.not-index-main').fadeOut();
  $('#' + $reveal).fadeIn();
  // console.log(event.target);
});

//Tentative Plan of Attack
//go through code and replace with jquery (DOM & event listners) - Jeremiah
//Mobile first - add media queries - Yamile
// creating a data base (changing from local storage to sql) - Yamile & Jeremiah
// AJAX Chart.JS - Yamile
// Handlbar template for duplicate code - Jermiah
// cleaning up CSS with SMACCS - Jermiah & Yamile
