var sx = document.getElementById('sx');                   // Элемент для записи значения screenX
var sy = document.getElementById('sy');                   // Элемент для записи значения screenY
var px = document.getElementById('px');                   // Элемент для записи значения pageX
var py = document.getElementById('py');                   // Элемент для записи значения pageY
var cx = document.getElementById('cx');                   // Элемент для записи значения clientX
var cy = document.getElementById('cy');                   // Элемент для записи значения clientY

function showPosition(event) {                            // Объявляем функцию
  sx.value = event.screenX;                               // Объявляем элемент, используя значение screenX
  sy.value = event.screenY;                               // Объявляем элемент, используя значение screenY
  px.value = event.pageX;                                 // Объявляем элемент, используя значение pageX
  py.value = event.pageY;                                 // Объявляем элемент, используя значение pageY
  cx.value = event.clientX                                // Объявляем элемент, используя значение clientX
  cy.value = event.clientY;                               // Объявляем элемент, используя значение clientY
}

var el = document.getElementById('body');                 // Получаем элемент body
el?.addEventListener('mousemove', showPosition, false);   // Позиция обновляется при перемещении мыши
