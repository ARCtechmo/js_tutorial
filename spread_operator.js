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

	// order: function (starterIndex, mainIndex) {
	//   return [this.starterMenu[starterIndex], [this.mainMenu[mainIndex]]];
	// },

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

const restaurant2 = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`)
	},
}

// spread operator - create a new object
const newRestaurant = {foundedIn: 1998, ...restaurant2, founder: "John Doe"}
console.log(newRestaurant)

// spread operator - copy an object
const restaurant2Copy = {...restaurant2}
restaurant2Copy.name = "Ristorante Roma"
console.log(restaurant2Copy.name) // output Ristorante Roma
console.log(restaurant2.name) // Classico Italiano

// spread operator with a function
const ingredients = [
	prompt("Let's make pasta! Ingredient 1?"),
	prompt("Let's make pasta! Ingredient 2?"),
	prompt("Let's make pasta! Ingredient 3?"),
]
// normal method to call the function
// prompt 1: mushroom, prompt 2: asparagus, prompt 3: cheese
restaurant2.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// output: Here is your delicious pasta with mushrooms,asparagus,cheese

// spread operator method to call the function
// prompt 1: mushroom, prompt 2: asparagus, prompt 3: cheese
restaurant2.orderPasta(...ingredients)
// output: Here is your delicious pasta with mushrooms,asparagus,cheese

// Spread Operator Iterables: arrays, strings, maps, sets; NOT objects
const str = "John Doe"
const letters = [...str, " ", "S."]
console.log(letters) // output ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e', ' ', 'S.']
console.log(...letters) // output J o h n   D o e   S.

// spread operator - create shallow copies of an array
const mainMenuCopy = [...restaurant2.mainMenu]
console.log(mainMenuCopy) // output ['Pizza', 'Pasta', 'Risotto']

// spread operator - merge arrays
const mergeArr = [...restaurant2.starterMenu, ...restaurant2.mainMenu]
console.log(mergeArr)
// output ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'Pizza', 'Pasta', 'Risotto']

// spread operator
// build a new array by expanding on an existing array
const newMenu = [...restaurant2.mainMenu, "Gnocci"]
console.log(newMenu) // output ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// normal array method
const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr) // output [1,2,7,8,9]
const arr2 = [1, 2, arr]
console.log(arr2) // output [1,2, Array(3)]

// spread operator for arrays
const newArr = [1, 2, ...arr]
console.log(newArr) // output [1,2,7,8,9]

// spread operator for passing values into functions
console.log(...newArr) // output 1,2,7,8,9
