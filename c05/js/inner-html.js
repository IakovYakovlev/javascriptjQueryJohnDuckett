// Сохраняем первый элемент списка в переменной
var firstItem = document.getElementById('one');

// Получаем содержимое первого элемента списка
var itemContent = firstItem?.innerHTML;

// Обновляем содержимое первого элемента списка, делая из него ссылку
firstItem.innerHTML = '<a href\"http://google.com\">' + itemContent + '</a>';
