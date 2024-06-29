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
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const updatedUser = {
  ...user,
  mood: 'happy',
  hobby: 'skydiving',
  premium: false,
};


for (const key of Object.keys(updatedUser)) {
  console.log(`${key}: ${updatedUser[key]}`);
}

const countProps = function (obj) {
  return Object.keys(obj).length;
};

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  
  let bestEmployee = '';
  let maxTasks = 0;

  for (const [name, tasks] of entries) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
};

console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));
console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 }));
console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38 }));

const countTotalSalary = function (employees) {
  const salaries = Object.values(employees);
  return salaries.reduce((total, salary) => total + salary, 0);
};

// Тести
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, lux: 50, chelsy: 150 }));

const getAllPropValues = function (arr, prop) {
  return arr.map(item => item[prop] !== undefined ? item[prop] : []);
};

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

// const calculateTotalPrice = function (allProdcuts, productName) {
//   const product = allProdcuts.find(({ name }) => name === productName);
//   return product ? product.price * product.quantity : 0;
// };

// // Тести
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроїд')); // 2800

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return { id: Date.now(), type, amount };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостатньо коштів');
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find(transaction => transaction.id === id);
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(transaction => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
};
