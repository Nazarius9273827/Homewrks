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