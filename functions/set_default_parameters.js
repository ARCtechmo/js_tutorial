"use strict"
const bookings1 = []

// set default parameters (old method)
// booking function
const createBooking1 = function (flightNum, numPassengers, price) {
	// ES5 method to set default parameters
	numPassengers = numPassengers || 1
	price = price || 199

	const booking = {
		flightNum,
		numPassengers,
		price,
	}
	console.log(booking)
	bookings1.push(booking)
}
createBooking1("LH123")

const bookings = []
// set default parameters (new method)
// dynamically calculate price
// booking function
const createBooking = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
) {
	const booking = {
		flightNum,
		numPassengers,
		price,
	}
	console.log(booking)
	bookings.push(booking)
}
createBooking("LH456")

// override default values by passing in new values
createBooking("LH123", 45)

// skip a parameter
createBooking("LH123", undefined, 1000)
