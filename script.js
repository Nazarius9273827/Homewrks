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

// // Поєднання слів в змінну fullName та додавання "Viktor"
// let my = "My";
// let name = "name";
// let is = "is";
// let fullName = `${my} ${name} ${is} Viktor`;
// console.log(fullName);

// // Виведення повідомлення про сплату через alert
// let userName = "Олександре";
// let payment = 300;
// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
// // Змінні для температур
// let celsiusTemperature = 25;
// let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// console.log(`Температура у Фаренгейтах: ${fahrenheitTemperature}°F`);

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

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (let i = 0; i < friends.length; i++) {
//     string += friends[i];
//     if (i < friends.length - 1) {
//         string += ', ';
//     }
// }

// console.log(string);

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

const string = friends.join(', ');

console.log(string);

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// const cardToRemove = 'Карточка-3';

// const indexToRemove = cards.indexOf(cardToRemove);

// if (indexToRemove !== -1) {
//   cards.splice(indexToRemove, 1);
// }

// console.log(cards);

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// const cardToInsert = 'Карточка-6';

// cards.splice(3, 0, cardToInsert);

// console.log(cards);

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

const cardToUpdate = 'Карточка-4';
const newCardValue = 'Карточка-7';

const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards.splice(indexToUpdate, 1, newCardValue);
}

console.log(cards);


