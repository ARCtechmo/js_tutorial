"use strict"

// maps
// there are two ways of populating a new map: .set() method or nested arrays
// map object holds key-value pairs and remembers the original insertion order
const rest = new Map()
rest.set("name", "Classico Italiano")
rest.set(1, "Firenze, Italy")
rest.set(2, "Lisbon, Portugal")
/* output:
Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}
[[Entries]]
0: {"name" => "Classico Italiano"}
1: {1 => "Firenze, Italy"}
2: {2 => "Lisbon, Portugal"}
*/

// maps - chain sets
rest
	.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
	.set("open", 11)
	.set("close", 23)
	.set(true, "We are open")
	.set(false, "We are closed")
// console.log(rest);
/* output:
Map(8) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 
2 => 'Lisbon, Portugal', 'categories' => Array(4), 'open' => 11, …}
[[Entries]]
0:{"name" => "Classico Italiano"}
1:{1 => "Firenze, Italy"}
2:{2 => "Lisbon, Portugal"}
3:{"categories" => Array(4)}
4:{"open" => 11}
5:{"close" => 23}
6:{true => "We are open"}
7:{false => "We are closed"}
*/
// maps - read data
console.log(rest.get("name"))
console.log(rest.get(true))
console.log(rest.get(1))
/* output: 
Classico Italiano
We are open
Firenze, Italy
*/

const time = 21
console.log(rest.get(time > rest.get("open") && time < rest.get("close")))
// output: We are open

console.log(rest.has("categories"))
// output: true

rest.delete(2)
console.log(rest)
console.log(rest.size)

// maps - populate using nested arrays
// similar to Object.entries(arrayName)
// example: quiz game
const question = new Map([
	["question", "What is the best programming language?"],
	[1, "C"],
	[2, "Java"],
	[3, "JavaScript"],
	["correct", 3],
	[true, "Correct!"],
	[(false, "Sorry, try again")],
])
console.log(question)
/* output:
Map(7) {'question' => 'What is the best programming language?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}
[[Entries]]
0: {"question" => "What is the best programming language?"}
1: {1 => "C"}
2: {2 => "Java"}
3: {3 => "JavaScript"}
4: {"correct" => 3}
5: {true => "Correct!"}
6: {"Sorry, try again" => undefined}
*/

// maps - iterate over a map
console.log(question.get("question"))
for (const [key, value] of question) {
	if (typeof key === "number") console.log(`Answer ${key}: ${value}`)
}
const answer = Number(prompt("Your answer:"))
console.log(answer)
console.log(question.get(question.get("correct")) === answer)

// maps - array of arrays has a similar to Object.entries(arrayName)
// demonstrate ES6 method to call an object literal
// call the hours object inside the restaurant object literal
const Openinghours = {
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
const hoursMap = new Map(Object.entries(Openinghours))

// maps - convert map to an array
console.log([...question])
console.log(question.entries())
console.log(question.keys())
console.log(question.values())
