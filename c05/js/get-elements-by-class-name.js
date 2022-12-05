var elements = document.getElementsByClassName('hot');    // Находим элементы с классом hot

if(elements.length > 2) {                                 // Если найдено 3 или более
  var el = elements[2];                                   // Выделяем трейтий элемент или NodeList
  el.className = 'cool';                                  // Изменяем значение атрибута class этого элемента
}
