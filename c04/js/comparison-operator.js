var pass = 50;    // Проходной балл
var score = 90;   // Набранный балл

// Проверяем, прошел ли пользователь тест
var hasPassed = score >= pass;

// Выводим сообщение на странице
var el = document.getElementById('answer');
el.innerHTML = 'Прохождение уровня: ' + hasPassed;
