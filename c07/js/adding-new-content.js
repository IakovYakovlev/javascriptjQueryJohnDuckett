$(function() {
  $('ul').before('<p class="notice">Список обновлен!</p>');
  $('li.hot').prepend('+ ');
  var $newListItem = $('<li><em>Кукуруза</em> без ГМО</li>');
  $('li:last').after($newListItem);
});
