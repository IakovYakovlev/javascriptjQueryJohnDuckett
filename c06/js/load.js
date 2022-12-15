function setup() {                                    // Объявляем функцию
  var textInput;                                      // Создаем переменную
  textInput = document.getElementById('username');    // Получаем имя, введенное пользователем
  textInput?.focus();                                 // Помещаем имя пользователя в фокус
}

window.addEventListener('load', setup, false);        // Когда страница загрузится, вызываем функцию setup()
