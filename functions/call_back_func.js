"use strict"
// first class functions are treated as values
// first-class functions are just another type of object

// higher-order-functions are possible becuase of first-class functios
// higher-order-functions can...
// 1) receive another function as an argument and..
// 2) ...returns a new function or both

// call back function example
// function replaces all spaces in a string
const oneWord = function (str) {
	return str.replace(/ /g, "").toLowerCase()
}

// function transforms the first word in the string to uppercase
const upperFirstWord = function (str) {
	const [first, ...others] = str.split(" ")
	return [first.toUpperCase(), ...others.join(" ")]
}

// Higher-order function
const transformer = function (str, fn) {
	console.log(`Original string: ${str}`)
	console.log(`Transformed string: ${fn(str)}`)
	console.log(`Transformed by: ${fn.name}`)
}
transformer("JavaScript is the best!", upperFirstWord)
transformer("JavaScript is the best!", oneWord)

// example with event listener and call back function
// call back functions are used all of the time in JavaScript
const high5 = function () {
	console.log("555555")
}
document.body.addEventListener("click", high5)
;["John", "Martha", "Adam"].forEach(high5)
