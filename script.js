// Змінні з власними значеннями
var age = 15;
var name = "Nazar";
var isStudent = false;
var myString = "Це моя улюблена цитата: 'Ваше серце - це скарб; утратите його - і ви злидень' - Оноре де Балзак";
var myNumber = 36;
myNumber += 10;
var myNull = null;

// Виведення значень в консоль
console.log("Age:", age);
console.log("Name:", name);
console.log("Is Student:", isStudent);
console.log("My String:", myString);
console.log("My Number:", myNumber);
console.log("My Null:", myNull);

// Спливаюче вікно prompt()
var userName = prompt("Будь ласка, введіть ваше ім'я:");
alert("Привіт, " + userName + "!");

// Спливаюче підтвердження confirm()
var confirmation = confirm("Натисніть OK, якщо ви погоджуєтесь з виконанням дії:");
if (confirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

// Спливаюче попередження alert() з підтвердженням confirm()
alert("Увага! Дія небезпечна!");
var dangerConfirmation = confirm("Натисніть OK, якщо ви погоджуєтесь з виконанням дії:");
if (dangerConfirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

// Виведення результату в консоль та перевірка типу змінної
let result = 5 + 5 + "5";
console.log(result); // Виведе "105"
console.log(typeof result); // Виведе "string"

// Перевірка електронної адреси та підрахунок символів зі змінної email
let email = "example@example.com";
let containsAtSymbol = email.includes("@");
let emailLength = email.length;
console.log(`Електронна адреса містить символ @: ${containsAtSymbol}`);
console.log(`Загальна кількість символів в електронній адресі: ${emailLength}`);

// Поєднання слів в змінну fullName та додавання "Viktor"
let my = "My";
let name = "name";
let is = "is";
let fullName = `${my} ${name} ${is} Viktor`;
console.log(fullName);

// Виведення повідомлення про сплату через alert
let userName = "Олександре";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
// Змінні для температур
let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(`Температура у Фаренгейтах: ${fahrenheitTemperature}°F`);

// Змінна для кількості днів у місяці
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин у місяці: ${hoursInMonth}, кількість хвилин у місяці: ${minutesInMonth}`);

// Змінні для рівня здоров'я та енергії гравця
let health = 80;
let energy = 90;
health -= 20;
energy -= 30;
console.log(`Рівень здоров'я гравця: ${health}, рівень енергії гравця: ${energy}`);

// Змінна для суми покупки в магазині
let purchaseAmount = 1000;
let discountedAmount = purchaseAmount * 0.1;
let finalAmount = purchaseAmount - discountedAmount;
console.log(`Сума зі знижкою: ${finalAmount}`);

// Змінна для числа з плаваючою комою
let floatingNumber = 10.567;
console.log(`Округлене число: ${Math.floor(floatingNumber)}`);

// Змінна для рядка з числом з плаваючою комою
let floatString = "15.qwerty789";
let parsedFloat = parseFloat(floatString);
console.log(`Число з рядка з плаваючою комою: ${parsedFloat}`);

// Змінна для рядка з цілим числом
let intString = "25qwerty";
let parsedInt = parseInt(intString);
console.log(`Ціле число з рядка: ${parsedInt}`);

// Змінна для числа
let number = 64;
let squareRoot = Math.sqrt(number);
console.log(`Квадратний корінь числа: ${squareRoot}`);

// Змінні для цілочисельного значення та рядка з числом у вигляді рядка
let integerNumber = 42;
let stringNumber = "100";
let parsedInteger = parseInt(stringNumber);
console.log(`Рядок перетворений у ціле число: ${parsedInteger}`);
let stringInteger = integerNumber.toString();
console.log(`Ціле число перетворене у рядок: ${stringInteger}`);

        // Task 1: Drink Selection
        const drinkSelect = document.getElementById('drinkSelect');
        const drinkMessage = document.getElementById('drinkMessage');

        drinkSelect.addEventListener('change', function() {
            drinkMessage.textContent = 'You selected ' + this.value;
        });

        // Task 2: Day Check
        function checkDay() {
            const dayInput = document.getElementById('dayInput').value.toLowerCase();
            const dayMessage = document.getElementById('dayMessage');
            const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
            const weekend = ['saturday', 'sunday'];

            if (weekdays.includes(dayInput)) {
                dayMessage.textContent = 'It\'s a working day.';
            } else if (weekend.includes(dayInput)) {
                dayMessage.textContent = 'It\'s a weekend!';
            } else {
                dayMessage.textContent = 'Invalid input!';
            }
        }

        // Task 3: Season Check
        function checkSeason() {
            const monthInput = parseInt(document.getElementById('monthInput').value);
            const seasonMessage = document.getElementById('seasonMessage');

            if (monthInput >= 1 && monthInput <= 12) {
                const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
                const season = Math.floor((monthInput % 12) / 3);
                seasonMessage.textContent = 'This month is in ' + seasons[season];
            } else {
                seasonMessage.textContent = 'Invalid month input!';
            }
        }

        // Task 4: Number of Days
        function checkMonthDays() {
            const monthDaysInput = parseInt(document.getElementById('monthDaysInput').value);
            const monthDaysMessage = document.getElementById('monthDaysMessage');

            if (monthDaysInput >= 1 && monthDaysInput <= 12) {
                const daysInMonth = new Date(2024, monthDaysInput, 0).getDate();
                monthDaysMessage.textContent = 'There are ' + daysInMonth + ' days in this month.';
            } else {
                monthDaysMessage.textContent = 'Invalid month input!';
            }
        }

        // Task 5: Traffic Light Action
        function checkColor() {
            const colorInput = document.getElementById('colorInput').value.toLowerCase();
            const colorMessage = document.getElementById('colorMessage');

            switch (colorInput) {
                case 'red':
                    colorMessage.textContent = 'Stop';
                    break;
                case 'green':
                    colorMessage.textContent = 'Go';
                    break;
                case 'yellow':
                    colorMessage.textContent = 'Wait';
                    break;
                default:
                    colorMessage.textContent = 'Invalid color!';
            }
        }

        // Task 6: Calculator
        function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;
            const result = document.getElementById('result');

            let output;
            switch (operation) {
                case '+':
                    output = num1 + num2;
                    break;
                case '-':
                    output = num1 - num2;
                    break;
                case '*':
                    output = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        output = 'Error! Division by zero.';
                    } else {
                        output = num1 / num2;
                    }
                    break;
                default:
                    output = 'Invalid operation!';
            }

            result.textContent = 'Result: ' + output;
        }