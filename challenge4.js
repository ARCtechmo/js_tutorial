// challenge 4 - strings
/*
Write a program that receives a list of variable names
written in underscore_case and converts them to 
CamelCase.  The input will come from a text area inserted
into the DOM and conversion should happen when you press
the button. 
*/

"use strict"

// create an array
const underScoreArr = [
	"underscore_case",
	"first_name",
	"Some_Variable",
	"calculate_AGE",
	"delayed_departure",
]

// change to lowercase and split the string
const splitArr = []
const splitString = function () {
	for (const item of underScoreArr) {
		splitArr.push(item.toLocaleLowerCase().split("_"))
	}
}
splitString()

// capitalize and join
const CamelCaseArr = []
const changeCase = function () {
	for (const words of splitArr) {
		const captWord = words[1][0].toUpperCase() + words[1].slice(1)
		CamelCaseArr.push(words[0] + captWord)
	}
}
changeCase()

// print rows
const printRows = function () {
	for (const str of CamelCaseArr) console.log(str)
}
/* text to use
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure
*/

// DOM button and text box
const showTextBox = function () {
	document.body.append(document.createElement("textarea"))
	document.body.append(document.createElement("button"))

	document.querySelector("button").addEventListener("click", function () {
		const text = document.querySelector("textarea").value
		const rows = printRows()
		console.log(rows)
	})
}
showTextBox()
/*
// instructor solution
document.querySelector("button").addEventListener("click", function () {
	const text = document.querySelector("textarea").value
	const rows = text.split("\n")
	for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLocaleLowerCase().trim().split("_")
		const output = `${first}${second.replace(
            second[0],
			second[0].toLocaleUpperCase()
            )}`
            console.log(`${output.padEnd(20)}${"".repeat(i + 1)} `)
        }
    })
    */
