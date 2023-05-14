"use strict"
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
}

// Create one array of players for each team
// destruct the game array
const [players1, players2] = game.players
console.log(players1, players2)

// assign a var for the goal keeper (first player) on team1
// assign a var for the remaining players on team1
// use the rest syntax to combine the arrays
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

// all players
// use the spred operator to extend both player arrays
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

// use the spread operator to create a new array
// combine team1 and add three new players
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]
console.log(players1Final)

// nested destructuring and spread operator
const {
	odds: {team1, x: draw, team2},
} = game
console.log(team1, draw, team2)

const printGoals = function (...players) {
	console.log(`${players.length} goals were scored`)
}
printGoals(...game.scored)

// team more likely to win
// use the && short-circuit operator
team1 < team2 && console.log("Team 1 is more likely to win")
