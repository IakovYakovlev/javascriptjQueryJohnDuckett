var score = 75;     // Балл
var msg;            // Сообщение

if(score >= 50) {   // Если балл составляет 50 или выше
  msg = 'Поздравляем!';
  msg += 'Переходите к следующему этапу.';
}

var el = document.getElementById('answer');
el.textContent = msg;
