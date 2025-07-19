const infoBlock = document.querySelector('.mini-card__info_super-big');
const originalBgColor = infoBlock.style.backgroundColor;
const originalTextColor = infoBlock.style.color;

document.getElementById('playBtn').addEventListener('click', function () {
    
    document.getElementById('colorBtn').style.display = 'block';
    document.getElementById('resetBtn').style.display = 'block';
    document.getElementById('colorCode').style.display = 'block';

    this.style.display = 'none';

    document.getElementById('colorCode').textContent = 'Текущий цвет: стандартный';
});

document.getElementById('colorBtn').addEventListener('click', function () {
    
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    infoBlock.style.backgroundColor = randomColor;

    document.getElementById('colorCode').textContent = `Текущий цвет: ${randomColor}`;

    const brightness = parseInt(randomColor.replace('#', ''), 16) > 0xffffff / 2 ? 'black' : 'white';
    infoBlock.style.color = brightness;
});

document.getElementById('resetBtn').addEventListener('click', function () {

    infoBlock.style.backgroundColor = originalBgColor;
    infoBlock.style.color = originalTextColor;

    document.getElementById('colorCode').textContent = 'Текущий цвет: стандартный';

    document.getElementById('colorBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('colorCode').style.display = 'none';

    document.getElementById('playBtn').style.display = 'block';
});