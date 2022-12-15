// Создаем HTML - разметки для сообщения
var msg = '<div class=\"header\"><a id=\"close\" href="#">Закрыть Х</a></div>';
msg += '<div><h2>Техническое обслуживание</h2>';
msg += 'С 12 до 13 часов на сервере прозиводится техническое обслуживание';
msg += 'Во время обслуживания могут происходить незначительные сбои в работе сайта.</div>';

var elNote = document.createElement('div');               // Создаем новый элемент
elNote.setAttribute('id', 'note');                        // Добавляем идентификатор объявляения
elNote.innerHTML = msg;                                   // Добавляем сообщение
document.body.appendChild(elNote);                        // Записываем его на страницу

function dismissNote() {                                  // Объявляем функцию
  document.body.removeChild(elNote);                      // Удаляем объявление
}

var elClose = document.getElementById('close');           // Получаем кнопку для закрытия объявления
elClose?.addEventListener('click', dismissNote, false);   // Нажимаем эту кнопку и закрываем объявление
