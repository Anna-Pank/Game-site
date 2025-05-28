// let a = 20;
// alert(a);

// let b = 2007;
// alert(b);

// let nameJS = 'Брендан Эйх (Brendan Eich)'
// alert(nameJS);

// let c = 10;
// let d = 2;
// alert(c + d);
// alert(c - d);
// alert(c * d);
// alert(c / d);

// let e = 2;
// let power = e ** 5;
// alert(power);

// let f = 9;
// let g = 2;
// let result = f % g;
// alert(result);

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

// let age = Number(prompt('Сколько вам лет?'));
// alert(`Вам ${age} лет`);

// const user = {
//     name: 'kosha',
//     age: 3,
//     isAdmin: true
// };

// let name = String(prompt('Как Вас зовут?'));
// alert(`Привет, ${name}!`);

// let password = 'Черепаха'
// let enter = prompt('Введите пароль')

// задание 1

if (enter === 'Черепаха') {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// задание 2

let c = 5;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 3

let d = 120;
let e = 8;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 4

let a = '2';
let b = '3';

console.log(+a + +b);

// задание 5

let monthNumber = Number(prompt('Введи номер месяца'));
switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default:
        console.log('Нет такого месяца')
        break;
}