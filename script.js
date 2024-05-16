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

const user = {
  name: "Nazar",
  age: 15,
  hobby: "IT",
  premium: true,
};

const { mood = "happy", hobby = "skydiving", premium = "false" } = user;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

var car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022
};

console.log(countProps(car));

function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = '';

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

const employees = {
  "John": 10,
  "Jane": 8,
  "Doe": 12,
  "Smith": 9
};

console.log(findBestEmployee(employees));

function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

// Приклад використання:
const salaries = {
  "John": 3000,
  "Jane": 2500,
  "Doe": 4000,
  "Smith": 3500
};

console.log(countTotalSalary(salaries));

function getAllPropValues(arr, prop) {
  const propValues = [];

  for (const obj of arr) {
    if (prop in obj) {
      propValues.push(obj[prop]);
    }
  }

  return propValues;
}

const products = [
  { name: 'Apple', price: 2 },
  { name: 'Banana', price: 3 },
  { name: 'Orange', price: 4 }
];

console.log(getAllPropValues(fruits, 'name'));
console.log(getAllPropValues(fruits, 'price'));

function calculateTotalPrice(allFruits, fruitName) {
  let totalPrice = 0;

  for (const fruit of allFruits) {
    if (fruit.name === fruitName) {
      totalPrice += fruit.price * fruit.quantity;
    }
  }

  return totalPrice;
}

const fruits = [
  { name: 'Apple', price: 2, quantity: 5 },
  { name: 'Banana', price: 3, quantity: 3 },
  { name: 'Orange', price: 4, quantity: 2 }
];

console.log(calculateTotalPrice(fruits, 'Apple'));
console.log(calculateTotalPrice(fruits, 'Banana'));
console.log(calculateTotalPrice(fruits, 'Orange'));

const account = {
  balance: 0,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount, date: new Date() });
    console.log(`Deposited ${amount} into account.`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }

    this.balance -= amount;
    this.transactions.push({ type: 'withdrawal', amount, date: new Date() });
    console.log(`Withdrawn ${amount} from account.`);
  },

  getBalance() {
    console.log(`Current balance: ${this.balance}`);
  },

  getTransactionHistory() {
    console.log("Transaction History:");
    this.transactions.forEach(transaction => {
      console.log(`Type: ${transaction.type}, Amount: ${transaction.amount}, Date: ${transaction.date}`);
    });
  }
};

account.deposit(100);
account.withdraw(50);
account.getBalance();
account.getTransactionHistory();