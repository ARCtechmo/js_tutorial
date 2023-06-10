"use strict"

// -----------Begin strings---------

// Tip: strings are primitives so how can we call methods on strings
// JavaScript converts the strings to methods behind the scenes
console.log(new String("Jonas")) // Output: String {'Jonas'}
console.log(typeof new String("Jonas")) // Output: object

const airline = "TAP Air Portugal"
const plane = "A320"

// strings - indexes
console.log(plane[0]) // Output: A
console.log("B737"[0]) // Output: B
console.log(airline.length) // Output: 16
console.log("B737".length) // Output: 4
console.log(airline.indexOf("r")) // Output: 6
console.log(airline.lastIndexOf("r")) // Output: 10

// strings - slice methods (slice methods do not affect the strings)

// extract the beginning of strings
console.log(airline.slice(4)) // Output: Air Portugal
console.log(airline.slice(4, 7)) // Output: Air

// extract without hard coding
console.log(airline.slice(0, airline.indexOf(" "))) // Output: TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)) // Output: Portugal

// slice from the end  - reverse string
console.log(airline.slice(-2)) // Output: al
console.log(airline.slice(1, -1)) // Output AP Air Portuga

// check middle seat of airplane
const checkMiddleSeat = function (seat) {
	// B and E are middle seates
	const s = seat.slice(-1)
	if (s === "B" || s === "E") console.log("You got the middle seat.")
	else console.log("You got lucky!!")
}
checkMiddleSeat("11B")
checkMiddleSeat("23c")
checkMiddleSeat("3E")
/* Output: 
You got the middle seat.
You got lucky!!
You got the middle seat.
*/

// change the case of a string
const airline2 = "TAP Air Program"
console.log(airline2.toLocaleLowerCase()) // Output: tap air program
console.log(airline2.toLocaleUpperCase()) // Output: TAP AIR PROGRAM
console.log("JOHNDOE".toLocaleLowerCase()) // Output: johndoe

// fix the capitalization in a passenger name
const autoCorrect = function (firstName) {
	const passenger = firstName
	const passengerLowerCase = passenger.toLocaleLowerCase()
	const passengerCorrect =
		passengerLowerCase[0].toLocaleUpperCase() + passengerLowerCase.slice(1)
	return passengerCorrect
}
console.log(autoCorrect("jOnAS"))

// compare emails
const correctEmail = function (email) {
	const loginEmail = email
	const correctEmail = email.toLocaleLowerCase().trim()
	return correctEmail
}
console.log(correctEmail(" Hello@Jonas.Io \n"))

// replace parts of strings
// alter the prices of flights
const formatGB = function (price) {
	price = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(price)
	return price
}
console.log(formatGB("28897")) // output: £288.97
const priceGB = formatGB("288.97") // output: £288.97
const priceUS = priceGB.replace("£", "$")
console.log(priceUS) // output: $288.97

// replace words using replaceAll() method
const announcement = "All passengers come to boarding door 23. Boardig door 23!"
console.log(announcement.replaceAll("door", "gate")) // output: $288.97;

// booleans
const plane2 = "Airbus A320neo"
console.log(plane2.includes("A320")) // output: true
console.log(plane2.includes("Boeing")) // output: false
console.log(plane2.startsWith("Air")) // output: true
if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
	console.log("Part of the new Airbus family")
}
// practice exercise
const checkBaggage = function (items) {
	const keywords = ["knife", "gun"]
	const baggage = items.toLocaleLowerCase()
	for (const item of keywords) {
		if (baggage.includes(keywords[0]) || baggage.includes(keywords[1])) {
			return console.log("You are NOT allowed on board the plane")
		} else {
			return console.log("Welcome aboard!")
		}
	}
}
console.log(checkBaggage("I have a laptop, some Food, and a pocket Knife"))
console.log(checkBaggage("socks and camera"))
console.log(checkBaggage("Got some snacks and a gun for protection"))

// split strings
console.log("a+very+nice+string".split("+"))
const [firstName, lastName] = "John Doe".split(" ")
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ")
console.log(newName)

// capitalize names - method 1
const capitalizeName = function (name) {
	const namesUpper = []
	const nameLower = name.toLocaleLowerCase()
	const names = nameLower.split(" ")
	for (const word of names) {
		namesUpper.push(word[0].toLocaleUpperCase() + word.slice(1))
	}
	console.log(namesUpper.join(" "))
}
capitalizeName("jessica ann smith davis") // output: Jessica Ann Smith Davis
capitalizeName("john doe") // output: John Doe

// capitalize names - method 2
const capitalizeName2 = function (name) {
	const namesUpper2 = []
	const namesLower2 = name.toLocaleLowerCase()
	const names = namesLower2.split(" ")
	for (const word of names) {
		namesUpper2.push(word.replace(word[0], word[0].toLocaleUpperCase()))
	}
	console.log(namesUpper2.join(" "))
}
capitalizeName2("jessica ann smith davis") // output: Jessica Ann Smith Davis
capitalizeName2("john doe") // output: John Doe

// padding a string
const message = "Go to gate 23"
console.log(message.length) // output: 13
console.log(message.padStart(15, "+")) // output: ++Go to gate 23
console.log(message.padStart(15, "+").padEnd(20, "-")) // output: ++Go to gate 23-----

// string methods
// mask a credit card number
const maskCreditCard = function (number) {
	const str = number + ""
	const last = str.slice(-4)
	return last.padStart(str.length, "*")
}
console.log(maskCreditCard(123456789))
console.log(maskCreditCard("123456789112233445566778899"))

// repeat a string
const message2 = "Bad weather...All departures Delayed... \n"
console.log(message2.repeat(5))

// bad weather delay
const planesInLine = function (num) {
	console.log(`There are ${num} planes in line due to bad weather.`)
}
planesInLine(5)
planesInLine(3)
planesInLine(12)
// -----------End strings-----------
