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

// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let numbersArray = [1, 2, 3];
numbersArray[1] = 10;

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let stringsArray = ["one", "two", "three"];
stringsArray.push("four");

// Створити скрипт який поверне суму всіх чисел в масиві.
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let numbersArray2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersArray2.length; i++) {
    console.log(numbersArray2[i]);
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
let stringsArray2 = ["one", "two", "three", "four", "five"];
for (let i = 0; i < stringsArray2.length; i++) {
    if (stringsArray2[i].length > 5) {
        console.log(stringsArray2[i]);
    }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let numbersArray3 = [5, 2, 8, 10, 3, 7, 1, 9, 4, 6];
let maxNumber = Math.max(...numbersArray3);
console.log("Максимальне значення з масиву:", maxNumber);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let numbersArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Парні числа в масиві:");
for (let i = 0; i < numbersArray4.length; i++) {
    if (numbersArray4[i] % 2 === 0) {
        console.log(numbersArray4[i]);
    }
}