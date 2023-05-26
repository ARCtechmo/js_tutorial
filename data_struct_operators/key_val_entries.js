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

// Loop over objects, keys, values, and entries
// get the keys Property values
for (const day of Object.keys(restaurant.openingHours)) {
	console.log(day)
}
// output:
/*
  thu
  fri
  sat
  */
const properties = Object.keys(restaurant.openingHours)
console.log(properties) // output: ['thu', 'fri', 'sat']
console.log(`We are open on ${properties.length} days`) // output We are open 3 days

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
	openStr += `${day} `
}
console.log(openStr) // output: We are open on 3 days: thu fri sat

// property values
const values = Object.values(restaurant.openingHours)
console.log(values)
/*
  (3) [{…}, {…}, {…}]
  0:{open: 12, close: 22}
  1:{open: 11, close: 23}
  2:{open: 0, close: 24}
  length: 3
  [[Prototype]]: Array(0)
  */

// Loop over the entire object
const entries = Object.entries(restaurant.openingHours)
console.log(entries)

for (const [key, {open, close}] of entries) {
	console.log(`On ${key} we open at ${open} and close at ${close}`)
}
// output
/*
  On thu we open at 12 and close at 22
  On fri we open at 11 and close at 23
  On sat we open at 0 and close at 24
  */
