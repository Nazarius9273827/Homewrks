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

function checkTextFields() {
    var field1Value = document.getElementById("field1").value;
    var field2Value = document.getElementById("field2").value;

    if (field1Value !== '' && field2Value !== '') {
        alert("Обидва поля заповнені");
    } else {
        alert("Не всі поля заповнені");
    }
}

function checkNumericFields() {
    var num1Value = parseFloat(document.getElementById("num1").value);
    var num2Value = parseFloat(document.getElementById("num2").value);
    var sum = num1Value + num2Value;

    if (sum > 10) {
        alert("Сума більша за 10");
    } else {
        alert("Сума менша або дорівнює 10");
    }
}

function checkText() {
    var textValue = document.getElementById("textInput").value;

    if (textValue.includes('JavaScript')) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
}

function checkNumberRange() {
    var numberValue = parseFloat(document.getElementById("numberInput").value);

    if (numberValue > 10 && numberValue < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
}

function validateForm() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    if (name.length >= 3 && email.includes('@') && email.includes('.') && password.length >= 6) {
        // Якщо дані правильні, можна перенаправити на іншу сторінку
        // Наприклад: window.location.href = 'інша_сторінка.html';
        alert("Дані введено правильно");
    } else {
        alert("Помилка. Перевірте введені дані.");
    }
}