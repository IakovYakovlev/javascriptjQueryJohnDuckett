$(function() {
  $('li').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=220'
    }, 2000, function() {
      $(this).remove();
    });
  });
});
