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

// deconstruct objects
const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories)

//create new variable names for the properties
// **Note: very useful for APIs
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
console.log(restaurantName, hours, tags)

// create default values for properties may not exist
// defaults will only apply if there is no property
const {menu = [], starterMenu: starters = []} = restaurant
console.log(menu, starters)

// mutate variables
let a = 111
let b = 999
const obj = {a: 23, b: 7, c: 14}
console.log(a, b)
console.log(obj)
;({a, b} = obj) // wrap parentheses around curly braces
console.log(a, b)

/*
// receive two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
*/

/*
// deconstruct a nested array
const nested = [2, 3, [5, 6]];

//retrieve the array
// use a space , , to skip
const [i, , j] = nested;
console.log(i, j);

// get the individual values
// use a space , , to skip
const [a, , [b, c]] = nested;
console.log(a, b, c);

// how to deal with unknown arrays
// scenario: you have a very large array of unknown length
// set default values to identify the unknown values
const [p = 1, q = 1, r = 1] = [0];
console.log(p, q, r); // output: 0 1 1
*/

/*
const arr = [1, 2, 3];

// normal way of declaring variables in the array
const a = arr[0];
const b = arr[1];
const c = arr[2];

// declare three variables at the same time
const [x, y, z] = arr;
console.log(x, y, z);

// does not impact the original array
console.log(arr);
*/

/*
// unpack the first and second categories of the dictionary
const [first, second] = restaurant.categories;
console.log(first, second);

// skip an element
// unpack the first and third elements
const [aaa, , bbb] = restaurant.categories;
console.log(aaa, bbb);

//reassign the values of the two ariables in the array
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
*/
