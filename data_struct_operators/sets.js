"use strict"
// Sets
// there are no index values in sets
// you cannot get an index value out of a set
const orderSet = new Set([
	"Pasta",
	"Pizza",
	"Pizza",
	"Risotto",
	"Pasta",
	"Pizza",
])
console.log(orderSet) // output: Set(3) {'Pasta', 'Pizza', 'Risotto'}
console.log(new Set("Jonas")) // output: Set(5) {'J', 'o', 'n', 'a', 's'}
console.log(orderSet.size) // output: 3

// test if an element is in a set
console.log(orderSet.has("Pizza")) // output: true
console.log(orderSet.has("Bread")) // output: fasle

// add elements to a set
orderSet.add("Garlic Bread")
orderSet.add("Garlic Bread")
console.log(orderSet) // output: Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

// delete elements from a set
orderSet.delete("Risotto")
console.log(orderSet) // output: Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

// loop through the set
for (const order of orderSet) console.log(order)
/*
  output: 
  Pasta
  Pizza
  Garlic Bread
  */

// build a set from an array
const staff = ["Walter", "Chef", "Waiter", "Manger", "Chef", "Waiter"]
const staffUnique = new Set(staff)
console.log(staffUnique) // output: Set(4) {'Walter', 'Chef', 'Waiter', 'Manger'}

// use the spread operator to unpack a set and build a new array
const staffUnique2 = [...new Set(staff)]
console.log(staffUnique2) // output: ['Walter', 'Chef', 'Waiter', 'Manger']

// iterate over a string
console.log(new Set("JohnDoe").size) // output: 6

// clear the set
orderSet.clear()
console.log(orderSet) // output: Set(0) {size: 0}
