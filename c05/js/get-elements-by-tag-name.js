var elements = document.getElementsByTagName('li');   // Находим элементы li

if(elements.length > 0) {                             // Если найден один или более элементов
  var el = elements[0];                               // Выбираем первый из них при помощи синтаксиса массивов
  el.className = 'cool';                              // Изменяем значение класса
}
