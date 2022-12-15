var elUsername = document.getElementById('username');                             // Получаем введенное имя пользователя
var elMsg = document.getElementById('feedback');                                  // Получаем элемент для обратной связи

function checkUsername(minLength) {                                               // Объявляем функцию
  if(elUsername?.value.length < minLength) {                                      // Если имяпользователя слишком коротное
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';  // Задаем сообщение об ошибке
  } else {                                                                        // Иначе
    elMsg.innerHTML = '';                                                         // Сбрасываем сообщение
  }
}

elUsername?.addEventListener('blur', function() {                                 // Когда элементы выходит из фокуса
  checkUsername(5);                                                               // Здесь передаем аргументы
}, false);
