// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// ES6 enhanced object literals
	// call the hours object from within the restaurant object literal
	// hours,

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

// ES6: methods with optional chaining
// Test if the 'order' method exists in the restaurant object literal
console.log(restaurant.order?.(0, 1) ?? "Method does not exist")
// output: method exists

// ES6: arrays with optional chaining
// test if the left side ('users')
const users = [{name: "JohnDoe", email: "johndoe@email.com"}]
console.log(users[0]?.name ?? "user does not exist")
// output: JohnDoe

// normal way of doing it
if (users.length > 0) console.log(users[0].name)
else console.log("user does not exist")
// output: JohnDoe

// optional chaining
const days = ["mon", "tues", "wed", "thrs", "fri", "sat", "sun"]
for (const day of days) {
	const open = restaurant.openingHours[day]?.open ?? `closed`
	console.log(`On ${day} we open at ${open}`)
}
// output
/*
On mon we open at closed
On tues we open at closed
On wed we open at closed
On thrs we open at closed
On fri we open at 11
On sat we open at 0
On sun we open at closed
*/
