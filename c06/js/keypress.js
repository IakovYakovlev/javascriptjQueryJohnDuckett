var el;                                                                           // Объявляем переменные

function charCount(e) {                                                           // Объявляем функцию
  var textEntered, charDisplay, counter, lastKey;                                 // Объявляем переменные
  textEntered = document.getElementById('message').value;                         // Пользовательский текст
  charDisplay = document.getElementById('charactersLeft');                        // Элемент счетчика
  counter = (180 - (textEntered.length));                                         // Количество оставшихся символов
  charDisplay.textContent = counter;                                              // Отображение оставшихся символов

  lastKey = document.getElementById('lastkey');                                   // Получение клавиши, нажатой последней
  lastKey.textContent = 'ASCII - код последней нажатой клавиши: ' + e.keyCode;    // Создаем сообщение
}

el = document.getElementById('message');                                          // Получаем элемент, в котором находится сообщене
el.addEventListener('keypress', charCount, false);                               // Событие keypress
