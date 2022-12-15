// Создаем новый элемент и сохраняем его в переменной.
var newEl = document.createElement('li');

// Создаем текстовый узел и сохраняем его в переменной.
var newText = document.createTextNode('Зернистый творог');

// Прикрепляем новый текстовый узел к новому элементу.
newEl.appendChild(newText);

// Находим позицию, на которую должен быть поставлен новый элемент.
var position = document.getElementsByTagName('ul')[0];

// Ставим новый элемент на эту позицию.
position.appendChild(newEl);
