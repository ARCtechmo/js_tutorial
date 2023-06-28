"use strict"

// data
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30"

// split the string on '+'
console.log(flights.split("+"))

// format the arrival and destination by removing the numbers (we only want the three letter codes)
const getCode = (str) => str.slice(0, 3).toLocaleUpperCase()

// loop through the array of the split string and create one string per line
for (const flight of flights.split("+")) {
	// build formatted strings for delayed departure and airport codes
	// console.log(flight.split(";"));

	// deconstruction the array
	const [type, from, to, time] = flight.split(";")
	const output = `${type.startsWith("_Delayed") ? "**" : ""}${type.replaceAll(
		"_",
		" "
	)} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(30)
	console.log(output)
}
