"use strict";
function calcAge(birthyear) {
	const age = 2037 - birthyear;
	console.log(firstName);
	return age;
}
const firstName = "JohnDoe";
calcAge(1991);

function calcAge2(birthyear2) {
	const age2 = 2037 - birthyear2;

	function printAge() {
		const output = `${firstName2} You are ${age2}, born in ${birthyear2}`;
		console.log(output);

		if (birthyear2 >= 1981 && birthyear2 <= 1996) {
			const str = `Oh, and you are a millenial, ${firstName2}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
			console.log(add(10, 5));
		}
	}
	printAge();
	return age2;
}
const firstName2 = "Jonas";
calcAge2(1991);
