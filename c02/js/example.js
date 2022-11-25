// Создаем переменные для приветсвенного сообщения
var greeting = 'Привет, ';
var firstName = 'Катерина';
var message = '! Пожалуйста, проверьте заказ:';

// Конкатенируем значения трех переменных для формирования приветственного сообщения
var welcome = greeting + firstName + message;

// Создаем переменные, в которых будет храниться подробная информация о табличке
var sign = 'Всемирная сеть';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Получаем элемент с идентификатором greeting
var el = document.getElementById('greeting');
// Заменяем содержимое элемента на персонализированное приветственное сообщение
el.textContent = welcome;

// Получаем элемент с идетификатором userSign и обновляем его содержимое
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Получаем элемент с идентификатором tiles и обновляем его содержимое
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Получаем элемент с идентификатором shipping и обновляем его содержимое
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal;

// Получаем элемент с идентификатором shipping и обновляем его содержимое
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;

// Получаем элемент с идентификатором grandTotal и обновляем его содержимое
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal;