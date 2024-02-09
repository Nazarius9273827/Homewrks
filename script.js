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