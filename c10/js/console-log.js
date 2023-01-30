console.log('Мы начинаем...');
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  console.log('Вы ввели ', this.value);
});

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Нажали кнопку...');

  width = $('#width').val();
  console.log('Ширина ' + width);

  height = $('#height').val();
  console.log('Высота ', height);

  area = width * height;
  console.log(area);

  $form.append('<p>' + area + '</p>');
});
