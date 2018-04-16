$(function () {

  console.log('page is ready');

  $('#start').click(function () {
    $(this).css('z-index', '0');
  });

  $('#start').hover(function () {
    $(this).css('color', 'rgb(252, 131, 0, 1)');
  }, function () {
    $(this).css('color', '');
  });


});
