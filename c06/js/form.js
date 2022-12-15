var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;     // Обьявляем переменные
elForm = document.getElementById('formSignup');                       // Сохраняем элементы
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {                                                            // Объявляем функцию
  var package = this.options[this.selectedIndex].value;                             // Получаем выбранный вариант
  if(package == 'monthly') {                                                        // Если выбрана подписка на месяц
    elPackageHint.innerHTML = 'Сэкономте 100₽, оплатив подписку на год!';           // Отображаем это сообщение
  } else {                                                                          // Иначе
    elPackageHint.innerHTML = 'Прекрасный выбор!';                                  // Отоборажаем это сообщение
  }
}

function checkTerms(event) {                                                        // Объявляем функцию
  if(!elTerms.checked) {                                                            // Если флажок сброшен
    elTermsHint.innerHTML = 'Вы должны согласиться с условиями соглашения.';        // Отображаем сообщение
    event.preventDefault();                                                         // Не отправлять форму
  }
}

//Создаем слушатели событий : событие submit
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage?.addEventListener('change', packageHint, false);
