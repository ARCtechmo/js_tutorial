"use strict"
// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
}

// for-of loop
// reminder of ways return values of the array - all produce the same output
const m1 = [...restaurant.starterMenu]
console.log(m1) // output ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
console.log(restaurant["starterMenu"]) // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
console.log(restaurant.starterMenu) // output ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
for (const item of menu) console.log(item) // output
/*
Focaccia
Bruschetta
Garlic Bread
Caprese Salad
Pizza
Pasta
Risotto
*/

// return the index numer and the elements
for (const item of menu.entries()) console.log(item)
/*
[0, 'Focaccia']
[1, 'Bruschetta'],
...
[6, 'Risotto']
*/

// Old Method: alter the numbering to start at item 1 (like a real restaurant menu)
for (const item of menu.entries()) {
	console.log(`${item[0] + 1}: ${item[1]}`)
}
// output
/*
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/

// New Method: alter the numbering to start at item 1 (like a real restaurant menu)
for (const [i, el] of menu.entries()) {
	console.log(`${i + 1}, ${el}`)
}
// output
/*
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/
