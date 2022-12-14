function checkUsername() {                                                          // Объявляем функцию
  var username = el.value;                                                          // Сохраняем имя пользователя в переменной
  if(username.length < 5) {                                                         // Если в имени пользователя меньше 5 символов
    elMsg.className = 'warning';                                                    // Изменяем атрибут class у этого сообщения
    elMsg.textContent = 'Имя слишком короткое...';                                  // Обновляем сообщение
  } else {                                                                          // Иначе
    elMsg.textContent = '';                                                         // Стираем сообщение
  }
}

function tipUsername() {                                                            // Объявляем функцию
  elMsg.className = 'tip';                                                          // Меняем у сообщения атрибут class
  elMsg.innerHTML = 'Имя пользователя должно содержать не менее 5 символов';        // Добавляем сообщение
}

var el = document.getElementById('username');                                       // Получаем введенное имя пользователя
var elMsg = document.getElementById('feedback');                                    // Элемент, в котором будет содержаться сообщение
// Когда поле для ввода имени пользователя получает/теряет фокус, вызываем одну из функций, записанных выше:
el?.addEventListener('focus', tipUsername, false);                                  // Событие focus вызывает функцию tipUsername()
el?.addEventListener('blur', checkUsername, false);                                 // Событие blur вызывает функцию checkUsername()
