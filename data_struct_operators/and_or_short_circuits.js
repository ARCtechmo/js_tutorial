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
// check if the method orderPizza exists
if (restaurant.orderPizza) {
	restaurant.orderPizza("mushrooms", "spinach")
}
// AND short-circuit evaluation example
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach")

// ** Remember: Javascript has 5 falsy values: 0 '' undefined null NaN
// short-circuit with the AND && operator
// exact opposit of the OR operator short-circuit
// if the first value is 'falsy' Javascript immediately returns fasly value
// && means both must be true; otherwise returns falsy value
console.log(0 && "JohnDoe") // output 0
console.log(7 && "JohnDoe") // output 'JohnDoe'
console.log("Hello" && 23 && null && "JohnDoe") // output null
console.log("Hello" && 23) // output 23

console.log("---------OR------------")
// short-circuit with the OR || operator
// use a short-circut with a ternary conditional operator
// if the numGuests exists then return numGuests else return 10
// the method numGuests does not exist
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guest1) // output 10

// instead of using a ternary conditional just use a short-circuit
const guest2 = restaurant.numGuests || 10
console.log(guest2) // output 10

restaurant.numGuests = 23
const guest3 = restaurant.numGuests || 10
console.log(guest3) // output 23

// some propertis of logical evaluators
// use any data type
// return any data type
// short-circuit evaluation

// OR (||) Short-circuit evaluation
// The OR || operator does not have to be a boolean
// if the first value is a 'truthy' value then it will immediately return that value
// the second part is not evaluated if the first part is truthy
console.log(3 || "JohnDoe") // output 3
console.log("" || "JohnDoe") // JohnDoe
console.log(true || 0) // true
console.log(undefined || null) // null

// General Rules: OR operator looks for the first truthy value
console.log(undefined || 0 || "" || "Hello" || 23 || null) // output hello

/*
// rest operator - pass arguments into functions and edge cases
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// output:
// mushrooms
// ['onion', 'olives', 'spinach']

restaurant.orderPizza('mushrooms');
// output:
// mushrooms
// [] - an empty array

// rest operator pass arguments into a function
// rest operator is the parameter in the function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(2, 3)); // output 5
console.log(add(2, 3, 5)); // output 10
console.log(add(2, 5, 8, 2, 1, 4)); // output 22

const zzz = [23, 5, 7];
console.log(add(...zzz)); // output 35
*/

// Destructuring
// objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
/*
output 
{thu: {…}, fri: {…}}
fri
: 
{open: 11, close: 23}
thu
: 
{open: 12, close: 22}
*/
/*
// combine arrays - destructuring
// use ... on both sides of the = operator
// **Rules:
// 1. the rest element must be the last element
// 2. there can only be one rest element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...otherFood);
// output Pizza Risotto Focaccia Bruschetta Garlic Bread Caprese Salad

// Rest Patterns and Parameters - exact opposite of the spread operator
// spread operator goes on the RIGHT side of =
const arrEx = [1, 2, ...[3, 4]];

// rest goes on the LEFT side of the =
const [w, x, ...others] = [1, 2, 3, 4, 5];
console.log(w, x); // output 1,2
console.log(w, x, ...others); // output 1,2,3,4,5
*/

/*
const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
};

// spread operator - create a new object
const newRestaurant = { foundedIn: 1998, ...restaurant2, founder: 'John Doe' };
console.log(newRestaurant);

// spread operator - copy an object
const restaurant2Copy = { ...restaurant2 };
restaurant2Copy.name = 'Ristorante Roma';
console.log(restaurant2Copy.name); // output Ristorante Roma
console.log(restaurant2.name); // Classico Italiano

// spread operator with a function
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
// normal method to call the function
// prompt 1: mushroom, prompt 2: asparagus, prompt 3: cheese
restaurant2.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// output: Here is your delicious pasta with mushrooms,asparagus,cheese

// spread operator method to call the function
// prompt 1: mushroom, prompt 2: asparagus, prompt 3: cheese
restaurant2.orderPasta(...ingredients);
// output: Here is your delicious pasta with mushrooms,asparagus,cheese

// Spread Operator Iterables: arrays, strings, maps, sets; NOT objects
const str = 'John Doe';
const letters = [...str, ' ', 'S.'];
console.log(letters); // output ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e', ' ', 'S.']
console.log(...letters); // output J o h n   D o e   S.

// spread operator - create shallow copies of an array
const mainMenuCopy = [...restaurant2.mainMenu];
console.log(mainMenuCopy); // output ['Pizza', 'Pasta', 'Risotto']

// spread operator - merge arrays
const mergeArr = [...restaurant2.starterMenu, ...restaurant2.mainMenu];
console.log(mergeArr);
// output ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'Pizza', 'Pasta', 'Risotto']

// spread operator
// build a new array by expanding on an existing array
const newMenu = [...restaurant2.mainMenu, 'Gnocci'];
console.log(newMenu); // output ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// normal array method
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // output [1,2,7,8,9]
const arr2 = [1, 2, arr];
console.log(arr2); // output [1,2, Array(3)]

// spread operator for arrays
const newArr = [1, 2, ...arr];
console.log(newArr); // output [1,2,7,8,9]

// spread operator for passing values into functions
console.log(...newArr); // output 1,2,7,8,9
*/

/*
// deconstruct objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//create new variable names for the properties
// **Note: very useful for APIs
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// create default values for properties may not exist
// defaults will only apply if there is no property
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutate variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
console.log(obj);
({ a, b } = obj); // wrap parentheses around curly braces
console.log(a, b);

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/

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
