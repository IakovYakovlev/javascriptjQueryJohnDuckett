// Выбираем исходный элемент и находим элементы, смежные с ним.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;


// Изменяем значение атрибутов class у смежных элементов.
prevItem.className = 'complete';
nextItem.className = 'cool';
