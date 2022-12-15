var removeEl = document.getElementsByTagName('li')[3];    // Подготавливаем элемент к удалению из переменной.

var containerEl = removeEl.parentNode;                    // Определяем элемент, содержащий удаляемый объект.

containerEl?.removeChild(removeEl);                       // Удаляем элемент.
