"use strict"

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30"

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient)
		console.log(otherIngredients)
	},
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
}
const rest1 = {
	name: "Capri",
	numGuests: 20,
}
const rest2 = {
	name: "La Piazza",
	owner: "Giovanni Rossi",
}
// AND assignment operator
rest1.owner &&= "<ANONYMOUS>"
rest2.owner &&= "<ANONYMOUS>"
console.log(rest1) // output {name: 'Capri', numGuests: 20, owner: undefined}
console.log(rest2) // output {name: 'La Piazza', owner: '<ANONYMOUS>'}

// Logical Assignment Operator
// AND assignment operator
// example: anonymize the restaurant owner's name (if there is one) using a short-circuit
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest1) // output {name: 'Capri', numGuests: 20, owner: undefined}
console.log(rest2) // output {name: 'La Piazza', owner: '<ANONYMOUS>'}

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10
rest2.numGuests ??= 10
console.log(rest1) // output {name: 'Capri', numGuests: 20}
console.log(rest2) // output {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

// basic example with the OR perator short-circuit
rest1.numGuests = rest1.numGuests || 10
rest2.numGuests = rest2.numGuests || 10
console.log(rest1.numGuests) // output 20
console.log(rest2.numGuests) // output 10
console.log(rest1) // output {name: 'Capri', numGuests: 20}
console.log(rest2) // output {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

console.log("compare logical assignmnt operator-------------")
// Logical Assignment Operator
// OR assignment operator
rest1.numGuests ||= 10
console.log(rest1) // output {name: 'Capri', numGuests: 20}
console.log(rest2) // output {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}
