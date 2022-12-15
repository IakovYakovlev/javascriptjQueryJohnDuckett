var hotItems = document.querySelectorAll('li.hot');   // Сохраняем NodeList в массиве

if(hotItems.length > 0) {
  for(var i = 0; i < hotItems.length; i++) {
    hotItems[i].className = 'cool';
  }
}
