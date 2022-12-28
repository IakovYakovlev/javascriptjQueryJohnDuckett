$(function() {
  $('li:contains("Кедровые")').text('миндаль');
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#one').remove();
});
