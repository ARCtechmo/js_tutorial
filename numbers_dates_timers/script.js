"use strict";
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
	interestRate: 1.2, // %
	pin: 1111,

	movementsDates: [
		"2019-11-18T21:31:17.178Z",
		"2019-12-23T07:42:02.383Z",
		"2020-01-28T09:15:04.904Z",
		"2020-04-01T10:17:24.185Z",
		"2020-05-08T14:11:59.604Z",
		"2020-05-27T17:01:17.194Z",
		"2020-07-11T23:36:17.929Z",
		"2020-07-12T10:51:36.790Z",
	],
	currency: "EUR",
	locale: "pt-PT", // de-DE
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,

	movementsDates: [
		"2019-11-01T13:15:33.035Z",
		"2019-11-30T09:48:16.867Z",
		"2019-12-25T06:04:23.907Z",
		"2020-01-25T14:18:46.235Z",
		"2020-02-05T16:33:06.386Z",
		"2020-04-10T14:43:26.374Z",
		"2020-06-25T18:49:59.371Z",
		"2020-07-26T12:01:20.894Z",
	],
	currency: "USD",
	locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
	containerMovements.innerHTML = "";

	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

	movs.forEach(function (mov, i) {
		const type = mov > 0 ? "deposit" : "withdrawal";

		const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
			i + 1
		} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
	labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes}€`;

	const out = acc.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = `${Math.abs(out)}€`;

	const interest = acc.movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * acc.interestRate) / 100)
		.filter((int, i, arr) => {
			// console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);
	labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	});
};
createUsernames(accounts);

const updateUI = function (acc) {
	// Display movements
	displayMovements(acc.movements);

	// Display balance
	calcDisplayBalance(acc);

	// Display summary
	calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
	// Prevent form from submitting
	e.preventDefault();

	currentAccount = accounts.find(
		(acc) => acc.username === inputLoginUsername.value
	);
	console.log(currentAccount);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		// Display UI and message
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(" ")[0]
		}`;
		containerApp.style.opacity = 100;

		// Clear input fields
		inputLoginUsername.value = inputLoginPin.value = "";
		inputLoginPin.blur();

		// Update UI
		updateUI(currentAccount);
	}
});

btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAcc = accounts.find(
		(acc) => acc.username === inputTransferTo.value
	);
	inputTransferAmount.value = inputTransferTo.value = "";

	if (
		amount > 0 &&
		receiverAcc &&
		currentAccount.balance >= amount &&
		receiverAcc?.username !== currentAccount.username
	) {
		// Doing the transfer
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);

		// Update UI
		updateUI(currentAccount);
	}
});

btnLoan.addEventListener("click", function (e) {
	e.preventDefault();

	const amount = Number(inputLoanAmount.value);

	if (
		amount > 0 &&
		currentAccount.movements.some((mov) => mov >= amount * 0.1)
	) {
		// Add movement
		currentAccount.movements.push(amount);

		// Update UI
		updateUI(currentAccount);
	}
	inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin
	) {
		const index = accounts.findIndex(
			(acc) => acc.username === currentAccount.username
		);
		console.log(index);
		// .indexOf(23)

		// Delete account
		accounts.splice(index, 1);

		// Hide UI
		containerApp.style.opacity = 0;
	}

	inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
	e.preventDefault();
	displayMovements(currentAccount.movements, !sorted);
	sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// ** NOTE: JavaScript is not the best language for conducting
// precise scientific or financial programs and proglems
// this is becuase JavaScript cannot represent precise fractions
console.log(0.1 + 0.2 === 0.3); // Output: false **FLAW in JS**

// numbers are treated as floating points in JavaScript
console.log(45 === 45.0); // true

// you can replace 'Number' with +
console.log(Number("23"));
console.log(+"23");

// parse a number from a string using Number.parseInt('')
// must start with a number
console.log(Number.parseInt("30px", 10)); // output: 30
console.log(Number.parseInt("ex30", 10)); // output: NaN

// CHECK IF VALUE IS NOT A NUMBER - USE Number.isNaN()
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(23 / 0));

// CHECK IF A VALUE IS A NUMBER - USE .isFinite()
console.log(Number.isFinite(20)); // output: true
console.log(Number.isFinite("20")); // output: false
console.log(Number.isFinite(+"20")); // output: true
console.log(Number.isFinite(20 / 0)); // output: false

// CHECK IF A VALUE IS AN INTEGER - USE .isInteger()
console.log(Number.isInteger(20)); // output: true
console.log(Number.isInteger("20")); // output: false

// Math and rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));

// pi and radius of a circle
const radius = 1;
console.log(Math.PI);
console.log(2 * Math.PI * radius);

// truncate and round numbers
console.log(Math.trunc(25.3));
console.log(Math.round(25.5));

// floor and ceiling work similar to truncate and round
// floor works with both positive and negative integers
console.log(Math.ceil(23.9));
console.log(Math.floor(23.5));
console.log(Math.floor(-23.5));

// generate random integers
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(`random int: ${randomInt(10, 20)}`);

// rounding decimals
console.log((2.7).toFixed(3));
console.log((2.35).toFixed(2));

// remainder operator
console.log(5 % 2);
console.log(8 % 2);

// even number - remainder 0
console.log(6 % 2);
const isEven = (n) => (n % 2 === 0 ? "even" : "odd");
console.log(isEven(8));
console.log(isEven(5));

// numeric separators - underscore
// only use underscores with numbers; not strings
const diameter = 287_460_000_000;
console.log(diameter);
const priceCents = 345_90;
console.log(priceCents);

// max value in JavaScript
// 9007199254740991 is the largest value you can have in JavaScript
// anything beyond 9007199254740991 is considered unsafe
console.log(Number.MAX_SAFE_INTEGER);

// BigInt() function
console.log(BigInt(46546547897978976554631213131231398764));
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // BigInt

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

// create dates
const now = new Date();
console.log(now);
console.log(new Date("Sept 01 2023 13:20:05"));
console.log(new Date(account1.movementsDates[0]));
console.log("--------------");
console.log(new Date(2023, 9, 31));
console.log("-----time elapsed since Unix Time: Jan 1, 1970-----");
console.log(new Date(0));

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // ** always use getFullYear()
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

// get a timestamp
console.log("-----timestamp-----");
console.log(Date.now());

// perform calculations with dates
console.log("-----date calculations");
const future1 = new Date(2037, 10, 19, 15, 23);
console.log(+future);
const calcDaysPassed = (date1, date2) =>
	Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);

// timers
// note JavaScript does not pause when it reaches this line
setTimeout(() => console.log("Here is your pizza."), 3000);
console.log("Waiting...");

// timers
const ingredients = ["olives", "ham"];
const pizzaTimer = setTimeout(
	(ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
	3000,
	...ingredients
);
console.log("waiting...");
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// display a clock
// setInterval(function () {
// 	const now = new Date();
// 	console.log(now);
// }, 1000);
console.log("end");

// initialize and display the clock
function updateClock() {
	// 1. initialize the clock
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");

	// 2a. display current time (HTML only)
	// document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;

	// 2b. display current time (console)
	console.log(`${hours}:${minutes}:${seconds}`);
}

// initialize update
// updateClock();

// 3. update the clock every second
// setInterval(updateClock, 1000);
