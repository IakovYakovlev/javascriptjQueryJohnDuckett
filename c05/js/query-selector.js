// Метод querySelector() возвращает только первое совпадаение.
var el = document.querySelector('li.hot');
el.className = 'cool';

// Меод querySelectorAll возвращает NodeList.
// Второй совпадающий с запросом элемент (третий в списке) выбирается и изменяется
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
