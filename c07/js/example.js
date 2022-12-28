$(function() {
  // Подготовка
  var $list, $newItemForm, $newItemButton;
  var item = '';                                                          // Элемент является пустой строкой
  $list = $('ul');                                                        // Кэшируем неупорядоченный список
  $newItemForm = $('#newItemForm');                                       // Кэшируем форму для добавления новых элементов
  $newItemButton = $('#newItemButton');                                   // Кэшируем кнопку для показа формы

  $('li').hide().each(function(index) {                                   // Скрываем пункты списка
    $(this).delay(450 * index).fadeIn(1600);                              // Затем плавно их выводим
  });

  // Счетчик пунктов
  function updateCount() {                                                // Создаем функцию для обновления счетчика
    var items = $('li[class!=complete]').length;                          // Количество элементов в списке
    $('#counter').text(items);                                            // Добавляем в круг счетчика
  }
  updateCount();                                                          // Вызываем функцию

  // Подготовка новых пунктов
  $newItemButton.show();                                                  // Показываем кнопку
  $newItemForm.hide();                                                    // Прячем форму
  $('#showForm').on('click', function() {                                 // При нажатии кнопки добавляения
    $newItemButton.hide();                                                // Прячем кнопку
    $newItemForm.show();                                                  // Показываем форму
  });

  // Добавление в список нового пункта
  $newItemForm.on('submit', function(e) {                                 // При отправке нового пункта
    e.preventDefault();                                                   // Предотвращаем отправку формы
    var text = $('input:text').val();                                     // Получаем значение текстового поля
    $list.append('<li>' + text + '</li>');                                // Добавляем элемент в конец списка
    $('input:text').val('');                                              // Очищаем поле ввода
    updateCount();                                                        // Обновляем счетчик
  });

  // Обработка целчка-использует дулегирование для элемента UL
  $list.on('click', 'li', function() {                                    //
    var $this = $(this);                                                  // Кэшируем элемент в объект jQuery
    var complete = $this.hasClass('complete');                            // Является ли пункт завершенным

    if(complete === true) {                                               // Проверяем, завершен ли пункт
      $this.animate({                                                     // Если да, анимируем прозрачность + отступ
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {                                       // При завершении анимации вызываем функцию обратного вызова
        $this.remove();                                                   // Затем полностью удаляем этот пункт
      });
    } else {                                                              // Если нет, делаем его завершенным
      item = $this.text();                                                // Получаем текст из элемента списка
      $this.remove();                                                     // Удаляем элемент списка
      $list                                                               // Добавляем его в конец списка как завершенный
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);                                              // Прячем его, чтобы плавно вывести на экран
      updateCount();                                                      // Обновляем счетчик
    }                                                                     // Конец ветки else
  });                                                                     // Конец обработчика событий
});
