// // Змінні з власними значеннями
// var age = 15;
// var name = "Nazar";
// var isStudent = false;
// var myString = "Це моя улюблена цитата: 'Ваше серце - це скарб; утратите його - і ви злидень' - Оноре де Балзак";
// var myNumber = 36;
// myNumber += 10;
// var myNull = null;

// // Виведення значень в консоль
// console.log("Age:", age);
// console.log("Name:", name);
// console.log("Is Student:", isStudent);
// console.log("My String:", myString);
// console.log("My Number:", myNumber);
// console.log("My Null:", myNull);

// // Спливаюче вікно prompt()
// var userName = prompt("Будь ласка, введіть ваше ім'я:");
// alert("Привіт, " + userName + "!");

// // Спливаюче підтвердження confirm()
// var confirmation = confirm("Натисніть OK, якщо ви погоджуєтесь з виконанням дії:");
// if (confirmation) {
//     alert("Дякую за підтвердження!");
// } else {
//     alert("Дію відмінено!");
// }

// // Спливаюче попередження alert() з підтвердженням confirm()
// alert("Увага! Дія небезпечна!");
// var dangerConfirmation = confirm("Натисніть OK, якщо ви погоджуєтесь з виконанням дії:");
// if (dangerConfirmation) {
//     alert("Дякую за підтвердження!");
// } else {
//     alert("Дію відмінено!");
// }

// // Виведення результату в консоль та перевірка типу змінної
// let result = 5 + 5 + "5";
// console.log(result); // Виведе "105"
// console.log(typeof result); // Виведе "string"

// // Перевірка електронної адреси та підрахунок символів зі змінної email
// let email = "example@example.com";
// let containsAtSymbol = email.includes("@");
// let emailLength = email.length;
// console.log(`Електронна адреса містить символ @: ${containsAtSymbol}`);
// console.log(`Загальна кількість символів в електронній адресі: ${emailLength}`);

// // Поєднання слів в змінну fullName та додавання "Viktor"
// // let my = "My";
// // let name = "name";
// // let is = "is";
// // let fullName = `${my} ${name} ${is} Viktor`;
// // console.log(fullName);

// // Виведення повідомлення про сплату через alert
// // let userName = "Олександре";
// // let payment = 300;
// // alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
// // // Змінні для температур
// // let celsiusTemperature = 25;
// // let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// // console.log(`Температура у Фаренгейтах: ${fahrenheitTemperature}°F`);

// // Змінна для кількості днів у місяці
// let daysInMonth = 30;
// let hoursInMonth = daysInMonth * 24;
// let minutesInMonth = hoursInMonth * 60;
// console.log(`Кількість годин у місяці: ${hoursInMonth}, кількість хвилин у місяці: ${minutesInMonth}`);

// // Змінні для рівня здоров'я та енергії гравця
// let health = 80;
// let energy = 90;
// health -= 20;
// energy -= 30;
// console.log(`Рівень здоров'я гравця: ${health}, рівень енергії гравця: ${energy}`);

// // Змінна для суми покупки в магазині
// let purchaseAmount = 1000;
// let discountedAmount = purchaseAmount * 0.1;
// let finalAmount = purchaseAmount - discountedAmount;
// console.log(`Сума зі знижкою: ${finalAmount}`);

// // Змінна для числа з плаваючою комою
// let floatingNumber = 10.567;
// console.log(`Округлене число: ${Math.floor(floatingNumber)}`);

// // Змінна для рядка з числом з плаваючою комою
// let floatString = "15.qwerty789";
// let parsedFloat = parseFloat(floatString);
// console.log(`Число з рядка з плаваючою комою: ${parsedFloat}`);

// // Змінна для рядка з цілим числом
// let intString = "25qwerty";
// let parsedInt = parseInt(intString);
// console.log(`Ціле число з рядка: ${parsedInt}`);

// // Змінна для числа
// let number = 64;
// let squareRoot = Math.sqrt(number);
// console.log(`Квадратний корінь числа: ${squareRoot}`);

// // Змінні для цілочисельного значення та рядка з числом у вигляді рядка
// let integerNumber = 42;
// let stringNumber = "100";
// let parsedInteger = parseInt(stringNumber);
// console.log(`Рядок перетворений у ціле число: ${parsedInteger}`);
// let stringInteger = integerNumber.toString();
// console.log(`Ціле число перетворене у рядок: ${stringInteger}`);

// // Task 1: Drink Selection
// let answer = prompt("Select drink");
// switch (answer) {
//   case "Coffee":
//     console.log("You selected coffee");
//     break;
//   case "Tea":
//     console.log("You selected tea");
//     break;
//   case "Juice":
//     console.log("You selected juice");
//     break;
//   default:
//     console.log("You selected nothing");
// }


// // Task 2: Day Check
// let day = prompt("Select day");
// switch (day) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//       console.log("It's a working day.");
//       break;
//     case "Saturday":
//     case "Sunday":
//       console.log("It's a weekend!");
//       break;
//     default:
//       console.log("Invalid input!");
//   }

// // // Task 3: Season Check
// let numberOfmonth = prompt("Select number of month");
// switch (numberOfmonth) {
//     case "12":
//     case "1":
//     case "2":
//       console.log("Winter");
//       break;
//     case "3":
//     case "4":
//     case "5":
//       console.log("Spring");
//       break;
//     case "6":
//     case "7":
//     case "8":
//       console.log("Summer");
//       break;
//     case "9":
//     case "10":
//     case "11":
//       console.log("Autumn");
//       break;
//     default:
//       console.log("Invalid input!");
//   }



// // // Task 4: Number of Days
// let monthNumber = prompt("Select number of month");
// switch (monthNumber) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//       console.log("31 day");
//       break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//       console.log("30 days");
//       break;
//     case "2":
//       console.log("28 or 29 days");
//       break;
//     default:
//       console.log("Invalid input!");
//   }


// // // Task 5: Traffic Light Action
// let color = prompt("Select color");
// switch (color) {
//     case "Red":
//       console.log("Stop!");
//       break;
//     case "Yellow":
//       console.log("Wait!");
//       break;
//     case "Green":
//       console.log("Go!");
//       break;
//     default:
//       console.log("Invalid input!");
//   }

// Task 6: Calculator
// let firstOperationNumber = prompt("Select first number");
// let operationSign = prompt("Select operation sign");
// let secondOperationNumber = prompt("Select second number");

//     let output;
//     switch (operationSign) {
//         case '+':
//             console.log(Number(firstOperationNumber) + Number(secondOperationNumber));
//             break;
//         case '-':
//           console.log(Number(firstOperationNumber) - Number(secondOperationNumber));
//             break;
//         case '*':
//           console.log(Number(firstOperationNumber) * Number(secondOperationNumber));
//             break;
//         case '/':
//             if (secondOperationNumber === 0) {
//                 console.log("Error! Division by zero.");
//             } else {
//               console.log(Number(firstOperationNumber) / Number(secondOperationNumber));
//             }
//             break;
//         default:
//             console.log("Invalid operation!");
//     }

        const showMessage = () => {
          alert("Hello World!");
      };

      const buttonCallback = (event) => {
          showMessage();
      };

      const button = document.getElementById('helloButton');
      button.onclick = buttonCallback;

const randomNumber = Math.floor(Math.random() * 100) + 1;

const checkGuess = () => {
    const userGuess = parseInt(document.getElementById('guessField').value, 10);
    
    const resultMessage = userGuess === randomNumber 
        ? 'Правильно! Ви вгадали число!' 
        : 'Неправильно. Спробуйте ще раз.';
    
    document.getElementById('guessResult').textContent = resultMessage;
};

let clickCount = 0;

const updateClickCount = () => {
    clickCount += 1;
    document.getElementById('clickCount').textContent = clickCount;
};

document.addEventListener('click', () => updateClickCount());

const applyCallbackToEachElement = (arr, callback) => {
  return arr.map(callback);
}

const arr = [1, 2, 3, 4, 5];
const squareCallback = num => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * (discount / 100));
  callback(discountedPrice);
};

const showDiscountedPrice = (price) => {
  console.log(`Discounted price: ${price}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
