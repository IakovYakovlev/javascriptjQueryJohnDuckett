$(function() {                                                                          // Когда дерево DOM готово
  var times;                                                                            // Объявляем глобальную переменную
  $.ajax({                                                                              // Setup request
    beforeSend: function(xhr) {                                                         // Перед выполнением запроса
      if(xhr.overrideMimeType) {                                                        // Если поддерживается
        xhr.overrideMimeType("application/json");                                       // Устанавливаем MIME для избегания ошибок
      }
    }
  });

  // Функция, которая собирает данные из JSON-файла
  function loadTimetable() {                                                            // Объявляем функцию
    $.getJSON('data/example.json')                                                      // Пробуем собрать JSON-данные
    .done( function(data) {                                                             // В случае успеха
      times = data;                                                                     // Сохраняем их в переменную
    }).fail( function() {                                                               // В случае проблемы: выводим сообщение
      $('#event').html('Sorry! We could not load the timetable at the moment');
    });
  }

  loadTimetable();                                                                      // Вызываем функцию

  // Щелчок по мероприятию загружает план мероприятия
  $('#content').on('click', '#event a', function(e) {                                   // Пользователь целкает по мероприятию
    e.preventDefault();                                                                 // Останавливаем загрузку страницы
    var loc = this.id.toUpperCase();                                                    // Получаем значение атрибута id

    var newContent = '';                                                                // Формируем таблицу с планом мероприятия
    for(var i = 0; i < times[loc].length; i++) {                                        // перебирая мероприятия
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent += times[loc][i].title.replace(/ /g,'-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>');                                 // Выводим время на странице

    $('#event a.current').removeClass('current');                                       // Обновляем выбранный элемент
    $(this).addClass('current');

    $('#details').text('');                                                             // Очищаем третью колонку
  });

  // Щелчок по мероприятию загружает его план
  $('#content').on('click', '#sessions li a', function(e) {                             // Щелчок по мероприятию
    e.preventDefault();                                                                 // Останавливаем загрузку
    var fragment = this.href;                                                           // Заголовок в href
    fragment = fragment.replace('#', ' #');                                             // Добавляем пробел перед #
    $('#details').load(fragment);                                                       // Чтобы загрузить данные

    $('#sessions a.current').removeClass('current');                                    // Обновляем выбранный план мероприятия
    $(this).addClass('current');
  });

  // Щелчок по первичной навигации
  $('nav a').on('click', function(e) {                                                  // Целчок по nav
    e.preventDefault();                                                                 // Останавливаем загрузку
    var url = this.href;                                                                // Получаем URL для загрузки

    $('nav a.current').removeClass('current');                                          // Обновляем nav
    $(this).addClass('current');

    $('#container').remove();                                                           // Удаляем прежнее содержимое
    $('#content').load(url + '#container').hide().fadeIn('slow');                       // Добавляем новое содержимое
  });
});
