function checkUsername() {                                                          // Объявляем функцию
  var elMsg = document.getElementById('feedback');                                  // Получаем элемент обратной связи
  if(this.value.length < 5) {                                                       // Если имя пользователя слишком коротное
    elMsg.textContent = 'Имя пользователя должно содержать не менее 5 символов';    // Указываем сообщение
  } else {                                                                          // Иначе
    elMsg.textContent = '';                                                         // Сбрасываем сообщение
  }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;
