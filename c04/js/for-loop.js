var scores = [24, 32, 17];          // Массив баллов
var arrayLength = scores.length;    // Элементы массива
var roundNumber = 0;                // Текущий этап
var msg = '';                       // Сообщение
var i;                              // Счетчик

// Цикл обрабатывает элементы массива
for(i = 0;i < arrayLength; i++){

  // Массивы имеют основание 0 (поэтому этап 0 идет первым)
  // Прибавляем 1 к текущему этапу
  roundNumber = (i + 1);

  // Записываем текущий этап в сообщение
  msg += 'Round ' + roundNumber + ':';

  // Получаем аллы из массива баллов
  msg += scores[i] + '<br/>';
}

document.getElementById('answer').innerHTML = msg;
