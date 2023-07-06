"use strict"

// functions returning functions
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting}, ${name}`)
	}
}
const greeterHey = greet("Hey")
greeterHey("John Doe")
greet("Hello")("Jonas")

// challenge - rewrite the above function using only arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`)
greetArr("Hi")("Jonas")
