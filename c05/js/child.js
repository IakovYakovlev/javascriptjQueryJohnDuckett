// Выделяем исходный элемент и находим его элементы-потомки
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Изменяем значение атрибутов class у элементов-потомков.
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');
// firstItem.className = 'complete';
// lastItem.className = 'cool';
