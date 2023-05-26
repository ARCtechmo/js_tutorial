// another way to call an object literal
const weekdays = ["mon", "tues", "wed", "thrs", "fri", "sat", "sun"]
const newHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[`day ${1 + 2}`]: {
		open: 0,
		close: 24,
	},
}
console.log(newHours)

/*
// output
{thrs: {…}, fri: {…}, day 3: {…}}
day 3: {open: 0, close: 24}
fri: {open: 11, close: 23}
thrs: {open: 12, close: 22}
[[Prototype]]: Object
*/

// copied from openingHours
// demonstrate ES6 method to call an object literal
// call the hours object inside the restaurant object literal
const hours = {
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
}

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	// call the hours object from within the restaurant object literal
	hours,

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
