var xhr = new XMLHttpRequest();                                                     // Создаем объект XMLHttpRequest

xhr.onload = function() {                                                           // Если состояние сервера подходящее
  if(xhr.status === 200) {                                                          // Если от сервера получен статус Ok
    var responseObject = JSON.parse(xhr.responseText);

    // Формируем строку с новым контентом (можно было бы также использовать работу с деревом DOM)
    var newContent = '';
    for(var i = 0; i < responseObject.events.length; i++) {                         // Перебарем объекты
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '"';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b></br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Обновляем страницу с новым контентом
    document.getElementById('content').innerHTML = newContent;
  }
};

xhr.open('GET', 'data/data.json', true);                                            // Подготавливаем запрос
xhr.send(null);                                                                     // Отправляем запрос
