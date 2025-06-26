function rockPaperScissors() {
    alert("Добро пожаловать в игру 'Камень, ножницы, бумага'!");
    const choices = ["камень", "ножницы", "бумага"];

    const userChoice = prompt("Выберите: камень, ножницы или бумага?").toLowerCase();

    if (!choices.includes(userChoice)) {
        alert("Некорректный ввод! Пожалуйста, выберите: камень, ножницы или бумага.");
        return rockPaperScissors();
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }

    alert(`
    Ваш выбор: ${userChoice}
    Выбор компьютера: ${computerChoice}
    Результат: ${result}
  `);

    // Предлагаем сыграть еще раз
    if (confirm("Хотите сыграть еще раз?")) {
        rockPaperScissors();
    } else {
        alert("Спасибо за игру!");
    }
}