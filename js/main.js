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
