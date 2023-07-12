"use strict";

// closures
// we do not necessarily directly create closures
// closures automatically happen in certain situations
// closrues are NOT objects; we cannot access them
// closures enable functions to maintain access that should no longer exist
const secureBooking = function () {
	let passengerCount = 0;

	return function () {
		passengerCount++;
		console.log(`${passengerCount}, passengers`);
	};
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// Example 2: more on closures - watch the behavior of the f variable
let f;

const g = function () {
	const a = 23;
	f = function () {
		console.log(a * 2);
	};
};

const h = function () {
	const b = 777;
	f = function () {
		console.log(b * 2);
	};
};
g();
f();
h();
f();

// Example 3: more on closures - watch the behavior of the f variable
// use a timer
const boardPassengers = function (num, wait) {
	const perGroup = num / 3;

	setTimeout(function () {
		console.log(`We are now boarding all ${num} passengers`);
		console.log(`There are 3 groups, each with ${perGroup} passenger`);
	}, wait * 1000);

	console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);

// challenge on IIFE
// use an event listener to change the color of the selected h1 element to blue
(function () {
	const header = document.querySelector("h1");
	header.style.color = "red";

	document.querySelector("body").addEventListener("click", function () {
		header.style.color = "blue";
	});
})();
