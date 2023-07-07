"use strict"

// first class functions are treated as values
// first-class functions are just another type of object

// higher-order-functions are possible becuase of first-class functios
// higher-order-functions can...
// 1) receive another function as an argument and..
// 2) ...returns a new function or both

// call and apply methods
const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	book: function (flightnum, name) {
		console.log(
			`${name} bookd a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
		)
		this.bookings.push({flight: `${this.iataCode}${flightnum}`, name})
	},
}
lufthansa.book(239, "John Doe")
lufthansa.book(635, "John Smith")

const eurowings = {
	airline: "Eurowings",
	iataCode: "EW",
	bookings: [],
}

// first class function call
const book = lufthansa.book

// will not work because...
// note the 'this' keyword will be undefined
// book(23, 'Sara Williams')

// tell JavaScript what the 'this' keyword should point to
// call method: The call method is used most often in modern JavaScript
book.call(eurowings, 23, "Sarah Williams")
console.log(eurowings)

book.call(lufthansa, 29, "Mary Sue")
console.log(lufthansa)

const swiss = {
	airline: "Swiss Airlines",
	iataCode: "LX",
	bookings: [],
}
book.call(swiss, 583, "Mary Cooper")
console.log(swiss)

// Apply method - NOT USED much anymore
const flighData = [583, "George Cooper"]
book.apply(swiss, flighData)
console.log(swiss)

// spread operator method: same as apply method
book.call(swiss, ...flighData)
