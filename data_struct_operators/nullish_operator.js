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

// Nullish Coalescing Operator (??)
// nullish values are null or undefined (does not inlucde 0 or '')
// if left-side isnullish Javascript returns right-hand side value
restaurant.numGuests2 = null
const guestCorrect2 = restaurant.numGuests2 ?? 10
console.log(guestCorrect2) // output 10

restaurant.numGuests = undefined
const guestCorrect3 = restaurant.numGuests2 ?? 10
console.log(guestCorrect3) // output 10

restaurant.numGuests2 = 0
const guestCorrect1 = restaurant.numGuests2 ?? 10
console.log(guestCorrect1) // output 0

restaurant.numGuests2 = " "
const guestCorrect4 = restaurant.numGuests2 ?? 10
console.log(guestCorrect4) // no output
