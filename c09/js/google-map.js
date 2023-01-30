function init() {
  var mapOptions = {                                 // Настраиваем параметры карты
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true,
    zoom: 13
  };
  var venueMap;                                      // Map() рисуте карту
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');     // Создаем элемент script
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 // Добавляем элемент на страницу
}

window.onload = loadScript;                          // После загрузки вызываем loadScript()
