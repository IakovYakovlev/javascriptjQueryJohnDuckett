$(function() {
  var listHeight = $('#page').height();
  $('ul').append('<p>Высота: ' + listHeight + 'px</p>');
  $('li').width('60%');
  $('li#one').width(200);
  $('li#two').width('75%');
});
