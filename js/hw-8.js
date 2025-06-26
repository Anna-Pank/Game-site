// Задание №1

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);

// Задание №2

function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); // [3, 1, 9]

const individuals = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(individuals, isMale)); 

// Задание №3

function printDateEvery3Seconds() {
  let secondsPassed = 0;
  const interval = 3000; 
  
  const intervalId = setInterval(() => {
    const now = new Date();
    const options = {
      timeZone: 'Europe/Moscow',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    console.log(now.toLocaleDateString('ru-RU', options));
    secondsPassed += 3;

    if (secondsPassed >= 30) {
      clearInterval(intervalId);
      console.log("30 секунд прошло");
    }
  }, interval);
}

printDateEvery3Seconds();

// Задание №4

function delayForSecond(callback) {
    setTimeout(callback, 1000); 
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// Задание №5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

