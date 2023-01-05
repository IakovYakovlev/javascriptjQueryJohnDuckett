$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
  .done(function(data) {                                                  // Сервер возвращает данные
    var d = new Date();                                                   // Создаем объект для данных
    var hrs = d.getHours();                                               // Получаем часы
    var mins = d.getMinutes();                                            // Получаем минуты
    var msg = '<h2>Exchange Rates</h2>';                                  // Начальное сообщение
    $.each(data, function(key, val) {                                     // Добавляем каждый курс
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    msg += '<br>Last update: ' + hrs + ': ' + mins + '<br>';              // Показываем время обновления
    $('#rates').html(msg);                                                // Добавляем цены на страницу
  }).fail(function() {                                                    // Произошла ошибка
    $('aside').append('Sorry, we cannot load rates.');                    // Показываем сообщение об ошибке
  }).always(function() {                                                  // Выполняем всегда
    var reload = '<a id="refresh" href="#">';                             // Добавляем ссылку для обновления
    reload += '<img src="img/refresh.png" alt="refresh" /></a>';
    $('#reload').html(reload);                                            // Добавляем ссылку для обновления
    $('#refresh').on('click', function(e) {                               // Добавляем обраотчик щелчка
      e.preventDefault();                                                 // Останавливаем переход
      loadRates();                                                        // Вызываем loadRates()
    });
  });
}

loadRates();                                                              // Вызываем loadRates()
