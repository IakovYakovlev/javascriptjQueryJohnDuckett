var itemTwo = document.getElementById('two');                             // Получаем второй элемент из списка

var elText = itemTwo.firstChild.nodeValue;                                // Получаем его текстовое содержимое

elText = elText.replace('Кедровые орешки', 'Белокочанная капуста');       // Меняем кдровые орешки на белокочанную капусту

itemTwo.firstChild.nodeValue = elText;                                    // Обновляем элемент списка
