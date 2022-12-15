var elList, addLink, newEl, newText, counter, listItems;              // Объявляем переменные

elList = document.getElementById('list');                             // Получаем список
addLink = document.querySelector('a');                                // Получаем кнопку добавления элемента
counter = document.getElementById('counter');                         // Получаем счетчик элементов

function addItem(e) {                                                 // Объявляем функцию
  e.preventDefault();                                                 // Подавляем стандартное поведение ссылки
  newEl = document.createElement('li');                               // Новый элемент li
  newText = document.createTextNode('New list item');                 // Новый текстовый узел
  newEl.appendChild(newText);                                         // Добавляем текст в li
  elList?.appendChild(newEl);                                         // Добавляем ли в список
}

function updateCount() {                                              // Объявляем функцию
  listItems = document.getElementsByTagName('li').length;             // Получаем общее количество элементов li
  counter.innerHTML = listItems;                                      // Обновляем счетчик
}

addLink?.addEventListener('click', addItem, false);                   // Щелчок по кнопке
elList?.addEventListener('DOMNodeInserted', updateCount, false);      // DOM обновляется
