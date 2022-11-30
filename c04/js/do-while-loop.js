var i = 1;      // Устанавливаем значение счеткика равным 1
var msg = '';   // Сообщение

// Сохраняем в переменной таблицу умножения на 5
do {
  msg += i + ' x 5 = ' + (i * 5) + '<br/>';
  i++;
} while(i < 1)

document.getElementById('answer').innerHTML = msg;
