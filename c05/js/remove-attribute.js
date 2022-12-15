var firstItem = document.getElementById('one');   // Получаем первый элемент
if(firstItem.hasAttribute('class')) {             // Если у него есть атрибут class
  firstItem.removeAttribute('class');             // удаляем этот атрибут class
}
