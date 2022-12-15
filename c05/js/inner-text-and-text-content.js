var firstItem = document.getElementById('one');     // Находим первый элемент списка
var showTextContent = firstItem.textContent;        // Получаем значение textContent
var showInnerText = firstItem.innerText;            // Получаем значение innerText

// Отображаем содержимое двух этих свойств после списка
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'Пшеничные сухарики';       // Обновляем первый элемент списка
