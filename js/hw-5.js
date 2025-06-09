// Задание №1
function biggerNumber() {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
let a = Number(prompt('напиши первое число'));
let b = Number(prompt('напиши второе число'));

console.log(biggerNumber());

// Задание №2
function evenOdd() {
    if (n % 2 == 0) {
        return ('Число четное');
    } else {
        return ('Число нечетное');
    }
}
let n = Number(prompt('напиши число'));

console.log(evenOdd());

// Задание №3
function printSquare(num) {
  const square = num * num;
  console.log(square);
}
printSquare(9);

function getSquare(num) {
  return num * num;
}
console.log(getSquare(9));

// Задание №4
function sayHello() {
    let a = Number(prompt('Сколько Вам лет?'));

    if (a < 0) {
        alert('Вы ввели неправильное значение');
    } else if (a <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

console.log(sayHello());

// Задание №5
function letNumber() {
    let a = Number(prompt('напиши первое число'));
    let b = Number(prompt('напиши второе число'));

    if (isNaN(a) || isNaN(b)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return a * b;
    }
}

console.log(letNumber());

// Задание №6
function cubeNumber() {
    let a = Number(prompt('напиши число'));

    if (isNaN(a)) {
        return ('Переданный параметр не является числом');
    } else {
        let cube = a ** 3;
        return `${a} в кубе равняется ${cube}`;
    }
}

console.log(cubeNumber());

// Задание №7
const circle1 = {
    radius: 7,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 37,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());