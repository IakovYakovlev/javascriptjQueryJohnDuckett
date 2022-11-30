var msg = '<p><b>Заголовок страницы:' + document.title + '<br />';
msg += '<b>адрес страницы:</b>' + document.URL + '<br />';
msg += '<b>дата изменения:' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;
