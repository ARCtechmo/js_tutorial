"use strict"

// main lesson: be carefule when multiple functions operate on the same object
const flight = "LH123"
const jonas = {
	name: "John Doe",
	passport: 24739479284,
}

// create a check-in function
const checkIn = function (flightNum, passenger) {
	passenger.name = "Mr. " + passenger.name
	if (passenger.passport === 24739479284) {
		alert("Check In")
	} else {
		alert("Wrong passport")
	}
}
checkIn(flight, jonas)
// console.log(flight);
// console.log(jonas);

// example of a new function manipulating the same object
const newPassport = function (person) {
	person.passport = Math.trunc(Math.random() * 1000000)
}

// change passport number then check-in again
newPassport(jonas)
checkIn(flight, jonas)
