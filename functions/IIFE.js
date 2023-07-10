"use strict"
// Immeidately Invoked Function Expression
// a function that disappears after it is called once
// create a function that only executes once
// used to protect variables by embedding them into the scope of the function

// Immeidately Invoked Function Expression
// NOTE: Embed the function into an expression with parentheses to avoid an error
;(function () {
	console.log("This will only run once.")
})()

// Immeidately Invoked Function Expression
// arrow function
;(() => console.log("This will never run again."))()

// const and let accomplish the same thing
// define a variable inside an expression
{
	const isPrivate = 23
	var notPrivate = 46
}

// console.log(isPrivate) // returns an error - not defined
console.log(notPrivate) // returns 46
