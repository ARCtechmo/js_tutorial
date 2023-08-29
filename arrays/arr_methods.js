"use strict";
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// array methods are simply functions attached to objects
// arrays are objects and they get access to special built-in methods
let arr = ["a", "b", "c", "d", "e"];

// slice an array at index 2
// does not affect the original array
console.log(arr.slice(2)); // output ["c","d","e"]
console.log(arr.slice(2, 4)); // output ["c","d"]
console.log(arr.slice(-1)); // output ["e"]
console.log(arr.slice(1, -2)); // output ["b","c"]

// create a shallow copy
console.log(arr.slice()); // output ["a", "b", "c", "d", "e"];
console.log([...arr]); // output ["a", "b", "c", "d", "e"];
console.log(...arr); // output a b c d e

// splice method - changes the original array
// console.log(arr.splice(2)); // output ["c","d","e"]
console.log(arr); // ["a", "b"];

// splice is commonly used to remove the last element of an array
console.log(arr.splice(-1));
console.log(arr);

// reverse method - mutates the original array
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // output ["f","g","h","i","j"]
console.log(arr2); // output ["f","g","h","i","j"]

// concat method
const letters = arr.concat(arr2);
console.log(letters); // output ["a", "b", "c", "d", "e","f","g","h","i","j"]
console.log([...arr, ...arr2]); // output ["a", "b", "c", "d", "e","f","g","h","i","j"]

// join method
console.log(letters.join(" - ")); // output a - b - c - d - e - f - g - h - i - j

// return index values old way vs at method
const arr3 = [23, 11, 64];

// common bracket notation to return an index value
console.log(arr3[0]); // output 23

// at method - returns an index value
console.log(arr3.at(0)); // output 23

// example with the at mehtod
// find the value of last index of an array (assume you do not the array length is unknown)
console.log(arr3[arr3.length - 1]); // output 64
console.log(arr3.slice(-1)[0]); // output 64
console.log(arr3.at(-1)); // output 64

// at method works on strings
console.log("Williamson".at(0)); // output W
console.log("Williams".at(-1)); // output s

// loop over arrays
// traditional 'for of' loop vs forEach loop
console.log("--------FOR OF LOOP over Array--------------");
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
}
console.log("------------FOR EACH--------------");
// for each loop method
// **IMPORTANT: You cannot break out of a 'forEach' loop
movements2.forEach(function (movement) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
});
console.log("---------FOR OF LOOP with Counter----------");
// loop over arrays
// add a counter
for (const [i, movement] of movements.entries()) {
	if (movement > 0) {
		console.log(`Movement ${i + 1} you deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1} you withdrew ${movement}`);
	}
}
// **IMPORTANT: You cannot break out of a 'forEach' loop
console.log("------------FOR EACH LOOP over Array with Counter--------------");
movements2.forEach(function (movement, i, array) {
	if (movement > 0) {
		console.log(`Movement ${i + 1} you deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1} you withdrew ${Math.abs(movement)}`);
	}
});

// FOR EACH on maps
const currencies2 = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);
currencies2.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
});

// FOR EACH on sets
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique); // output ["USD", "GBP", "EUR"]
currenciesUnique.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
});
// output
// USD: USD
// GBP: GBP
// EUR: EUR

// Array: data transformations
// map, filter, reduce

// map method - similar to the forEach method but returns a new array
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(function (number) {
	return number * 2;
});
console.log(doubleNumbers); // output [2,4,6,8,10]

const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements3.map(function (mov) {
	return (mov * eurToUsd).toFixed(0);
});
console.log(movements3);
console.log(movementsUSD);

// compare to a "for of" loop
const movementsUSDfor = [];
for (const mov of movements3) {
	movementsUSDfor.push((mov * eurToUsd).toFixed(0));
}
console.log(movementsUSDfor);

// convert the map method to an arrow function
const movementsUSDarrow = movements3.map((mov) => (mov * eurToUsd).toFixed(0));
console.log(movementsUSDarrow);

// filter method returns indexes within an array that pass certain conditions
// filter method example reuturn even numbers
const number2 = [1, 2, 3, 4, 5];
const evenNumbers = number2.filter(function (num) {
	return num % 2 === 0;
});
console.log(evenNumbers); // output [2,4]

// filter method example returns positive values in the array
console.log(movements);
const deposits = movements.filter(function (mov) {
	return mov > 0;
});
console.log(deposits);

// use a for of loop to return positive values
const depositsFor = [];
for (const mov of movements) {
	if (mov > 0) {
		depositsFor.push(mov);
	}
}
console.log(depositsFor);

// challenge: create an array of the withdrawals
console.log(movements);
const withdrawalsFor = [];
for (const mov of movements) {
	if (mov < 0) {
		withdrawalsFor.push(mov);
	}
}
console.log(withdrawalsFor); // output [-400, -650, -130]

const withdrawals2 = movements.filter(function (mov) {
	return mov < 0;
});
console.log(withdrawals2); // output [-400, -650, -130]

// The reduce method turns an array in to a single value
const numbers2 = [1, 2, 3, 4, 5];
const sum = number2.reduce(function (accumlator, currentValue) {
	return accumlator + currentValue;
}, 0);
console.log(sum);

// reduce method - get the balance of the account
// accumulator parameter is like a snowball
// cur is the current value
// 0 is the initial value of the accumulator
console.log(movements);
const balance = movements.reduce(function (accumulator, cur) {
	return accumulator + cur;
}, 0);
console.log(balance); // output 3840

// for of example
let sum1 = 0;
for (const num of movements) {
	sum1 += num;
}
console.log(sum1); // output 3840

// for loop with counter
let sum2 = 0;
for (let i = 0; i < movements.length; i++) {
	sum2 += movements[i];
}
console.log(sum2); // output 3840

// reduce method  - alter the final value
// Maximum number
console.log(movements);
const max = movements.reduce(function (accumulator, currentValue) {
	if (accumulator > currentValue) {
		return accumulator;
	} else {
		return currentValue;
	}
}, movements[0]);
console.log(max); // output 3000

// find method
// returns the first element in the array that satisfies the condition
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// find method
// use a named function instead of an arrow function
function isNegative(mov) {
	return mov < 0;
}
const firstWithdrawal2 = movements.find(isNegative);
console.log(firstWithdrawal2);

// find method - find a unique name
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

for (const acc of accounts) {
	if (acc.owner === "Jessica Davis") {
		console.log(acc);
	}
}

// some and includes methods
console.log(movements);
console.log(movements.includes(-130));
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// condition with some method
console.log(movements.some((mov) => mov === -130));

// every method
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// every method using separate callback functinos
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
console.log(movements.every(deposit));

// flat method
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

// flat method with a deep nesting
// flat with 2 levels deep
const arrDeep = [
	[[1, 2], 3],
	[4, [(5, 6)], 7, 8],
];
console.log(arrDeep.flat(2));

// flatMap method
// combines flat and map but only goes one level deep
// flat
const overalBalance = accounts
	.map((acc) => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts
	.flatMap((acc) => acc.movements)
	.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// sort method
// mutates the original array
// sorts based on strings
const owners = ["Jonas", "Zach", "Adam", "Martin"];
console.log(owners.sort());
console.log(owners);

// sort with numbers
console.log(movements);
console.log(movements.sort());

// sort example with numbers
// return < 0, A, B
// return > 0, B, A
movements.sort((a, b) => {
	if (a > b) {
		return 1;
	}
	if (b > a) {
		return -1;
	}
});
console.log(movements);

// create and fill arrays
// create a new array with 7 empty slots (not very useful)
const x = new Array(7);
console.log(x); // output [<7 empty slots>]

// call the fill method on an empty array
// fill(value, start, end)
const f = new Array(7);
f.fill(1);
console.log(f); // output [1,1,1,1,1,1,1]

// specifiy an index
// start an index 3 and fill with 0s
// fill(value, start, end)
const g = new Array(7);
g.fill(0, 3);
console.log(g); // output: [ <3 empty slots>, 1, 1, <2 empty slots> ]

// recreate an array
// Array.from() method
const foo = Array.from("foo");
console.log(foo); // output: [ "f", "o", "o" ]

// Use the Array.from() method to recreate an array
const z = Array.from({length: 7}, () => 1);
console.log(z);

// create an array from 1-7
const r = Array.from({length: 7}, (_, i) => i + 1);
console.log(r);

// example of Array.from() method combined with a function
function multiplyByTwo(value) {
	return value * 2;
}
const numbers3 = [1, 2, 3, 4, 5];
const doubleNumbers3 = Array.from(numbers3, multiplyByTwo);
console.log(doubleNumbers3); // output: [ 2, 4, 6, 8, 10 ]

console.log("print");

// Array methods practice
// calculate how much has been depostied to the
const bankDepositSum = accounts
	.flatMap((acc) => acc.movements)
	.filter((mov) => mov > 0)
	.reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// Array methods practice
// number of deposits >= 1000
const numDeposits1000 = accounts
	.flatMap((acc) => acc.movements)
	.filter((mov) => mov >= 1000).length;
console.log(numDeposits1000);

// Array methods practice - reduce method
// number of deposits >= 1000
const numDeposits1000_2 = accounts
	.flatMap((acc) => acc.movements)
	.reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000_2);

// Array methods practice - reduce method
// create an object that contains a sum of deposits and withdrawals
const sums = accounts
	.flatMap((acc) => acc.movements)
	.reduce(
		(sums, cur) => {
			cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
			return sums;
		},
		{deposits: 0, withdrawals: 0}
	);
console.log(sums);

// Array methods practice -
// convert a string to title case
const convertTitleCase = function (title) {
	const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
	const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
	const titleCase = title
		.toLowerCase()
		.split(" ")
		.map((word) => (exceptions.includes(word) ? word : capitalize(word)))
		.join(" ");
	return capitalize(titleCase);
};
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

//////////////////////////////////////////////////////////////////////////////////////
