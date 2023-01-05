$('#register').on('submit', function(e) {             // При отправке формы
  e.preventDefault();                                 // Предотвращаем ее отправку
  var details = $('#register').serialize();           // Сериализуем ее данные
  $.post('register.php', details, function(data) {    // Отправляем их с помощью $.post()
    $('#register').html(data);                        // Здесь выводим результат
  });
});
