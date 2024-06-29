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

let user = {
  name: 'Nazar',
  hobby: 'IT',
  premium: true
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
  const { [key]: value } = user;
  console.log(`${key}: ${value}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

const exampleObject = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

console.log(countProps(exampleObject));
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
  John: 5,
  Alice: 10,
  Bob: 7
};

console.log(findBestEmployee(employees));

function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

const salaries = {
  John: 3000,
  Alice: 4000,
  Bob: 2500
};

console.log(countTotalSalary(salaries));

function getAllPropValues(arr, prop) {
  return arr
    .map(item => {
      const { [prop]: value } = item;
      return value;
    })
    .filter(value => value !== undefined);
}

const products = [
  { name: 'apple', price: 30 },
  { name: 'banana', price: 20 },
  { name: 'cherry', price: 40 }
];

console.log(getAllPropValues(products, 'price'));

function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    const { name, price, quantity } = product;
    if (name === productName) {
      totalPrice += price * quantity;
    }
  }

  return totalPrice;
}

const allProducts = [
  { name: 'apple', price: 30, quantity: 5 },
  { name: 'banana', price: 20, quantity: 10 },
  { name: 'apple', price: 30, quantity: 3 }
];

console.log(calculateTotalPrice(allProducts, 'apple'));

const account = {
  balance: 0,
  transactionHistory: [],

  deposit(amount) {
    if (amount <= 0) {
      console.log('Сума депозиту повинна бути позитивною.');
      return;
    }

    this.balance += amount;
    this.transactionHistory.push({ type: 'deposit', amount });
    console.log(`Внесено ${amount}. Новий баланс: ${this.balance}.`);
  },

  withdraw(amount) {
    if (amount <= 0) {
      console.log('Сума зняття повинна бути позитивною.');
      return;
    }

    if (amount > this.balance) {
      console.log('Недостатньо коштів для зняття.');
      return;
    }

    this.balance -= amount;
    this.transactionHistory.push({ type: 'withdrawal', amount });
    console.log(`Знято ${amount}. Новий баланс: ${this.balance}.`);
  },

  getBalance() {
    console.log(`Поточний баланс: ${this.balance}.`);
    return this.balance;
  },

  getTransactionHistory() {
    if (this.transactionHistory.length === 0) {
      console.log('Історія транзакцій пуста.');
      return [];
    }

    console.log('Історія транзакцій:');
    this.transactionHistory.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction.type} на ${transaction.amount}`);
    });
    return this.transactionHistory;
  }
};

account.deposit(1000);
account.withdraw(500);
account.getBalance();
account.getTransactionHistory();
// Історія транзакцій:
// 1. deposit на 1000
// 2. withdrawal на 500