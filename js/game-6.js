const infoBlock = document.querySelector('.mini-card__info_super-big');
const originalBgColor = infoBlock.style.backgroundColor;
const originalTextColor = infoBlock.style.color;

document.getElementById('playBtn').addEventListener('click', function () {
    // Показываем кнопки "Изменить цвет" и "Отменить"
    document.getElementById('colorBtn').style.display = 'block';
    document.getElementById('resetBtn').style.display = 'block';
    document.getElementById('colorCode').style.display = 'block';

    // Скрываем кнопку "Играть!"
    this.style.display = 'none';

    // Инициализируем отображение текущего цвета
    document.getElementById('colorCode').textContent = 'Текущий цвет: стандартный';
});

document.getElementById('colorBtn').addEventListener('click', function () {
    // Генерируем случайный цвет
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    // Меняем фон блока с информацией
    infoBlock.style.backgroundColor = randomColor;

    // Обновляем отображение кода цвета
    document.getElementById('colorCode').textContent = `Текущий цвет: ${randomColor}`;

    // Меняем цвет текста для лучшей читаемости
    const brightness = parseInt(randomColor.replace('#', ''), 16) > 0xffffff / 2 ? 'black' : 'white';
    infoBlock.style.color = brightness;
});

document.getElementById('resetBtn').addEventListener('click', function () {
    // Возвращаем оригинальные цвета
    infoBlock.style.backgroundColor = originalBgColor;
    infoBlock.style.color = originalTextColor;

    // Обновляем отображение кода цвета
    document.getElementById('colorCode').textContent = 'Текущий цвет: стандартный';

    // Скрываем кнопки "Изменить цвет" и "Отменить"
    document.getElementById('colorBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('colorCode').style.display = 'none';

    // Показываем кнопку "Играть!"
    document.getElementById('playBtn').style.display = 'block';
});