$('nav a').on('click', function(e) {                            // Пользователь щелкает по ссылке nav
  e.preventDefault();                                           // Останавлием загрузку новой ссылки
  var url = this.href;                                          // Получаем значение href

  $('nav a.current').removeClass('current');                    // Удаляем текущий индикатор
  $(this).addClass('current');                                  // Новый текущий индикатор

  $('#container').remove();                                     // Удаляем старое содержимое
  $('#content').load(url+'#content').hide().fadeIn('slow');     // Новое содержимое
});
