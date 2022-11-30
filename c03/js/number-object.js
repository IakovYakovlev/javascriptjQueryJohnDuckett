var originalNumber = 10.23456;

var msg = '<h2>Исходное число</h2><p>' + originalNumber + '</p>';

// Округляет до 3-х разрядов. Возвращает строку.
msg += '<h2>3 десят. разряда</h2><p>' + originalNumber.toFixed(3) + '</p>';

// Общее количество знаков, которое должно быть у числа. Возвращает строку.
msg += '<h2>3 цифры</h2><p>' + originalNumber.toPrecision(3) + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;
