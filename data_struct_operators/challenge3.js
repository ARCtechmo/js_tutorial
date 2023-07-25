"use strict"

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

/* -------------Challenge 1----------------*/
// Create one array of players for each team
// destruct the game array
const [players1, players2] = game.players
// console.log(players1, players2)

// assign a var for the goal keeper (first player) on team1
// assign a var for the remaining players on team1
// use the rest syntax to combine the arrays
const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers)

// all players
// use the spred operator to extend both player arrays
const allPlayers = [...players1, ...players2]
// console.log(allPlayers)

// use the spread operator to create a new array
// combine team1 and add three new players
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]
// console.log(players1Final)

// nested destructuring and spread operator
const {
	odds: {team1, x: draw, team2},
} = game
// console.log(team1, draw, team2)

const printGoals = function (...players) {
	console.log(`${players.length} goals were scored`)
}
// printGoals(...game.scored)

// team more likely to win
// use the && short-circuit operator
// team1 < team2 && console.log("Team 1 is more likely to win")
/* -------------Challenge 1----------------*/

/* -------------Challenge 2----------------*/
// Loop of the game.scored array
// print each player name and the goal number
const playerGoal = function () {
	for (const [i, pl] of game.scored.entries()) {
		console.log(`Goal ${i + 1} ${pl}`)
	}
}
// playerGoal()

// calculate the average odd - solution 1
const avgOdds = function () {
	const val = Object.values(game.odds)
	let num = Object.values(game.odds).length
	let sum = 0
	for (const x of val) {
		sum = sum + x
	}
	const avg = (sum / num).toFixed(2)
	console.log("average odds:", avg)
}
// avgOdds()

// calculate the average odd - solution 2
const avgOdds2 = function () {
	let avg = 0
	const odds = Object.values(game.odds).length
	for (const odd of Object.values(game.odds)) {
		avg += odd
	}
	avg /= odds
	console.log("average odds:", avg.toFixed(2))
}
// avgOdds2()

// print the 3 odds in a nice formatted way
const nicePrint = function () {
	for (const [team, odd] of Object.entries(game.odds)) {
		const teamStr = team === "x" ? "draw" : `victory ${game[team]}`
		console.log(`Odd of ${teamStr} ${odd}`)
	}
}
nicePrint()

// BONUS
// loop over the array and add the array elements as object properties
// then increase the count as we encounter a new occurence of a certain element
const scorers = {}
for (const player of game.scored) {
	scorers[player] ? scorers[player]++ : (scorers[player] = 1)
}
/* -------------Challenge 2----------------*/

/* -------------Challenge 3----------------*/

const gameEvents = new Map([
	[17, "⚽️ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽️ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🔶 Yellow card"],
	[69, "🔴 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽️ GOAL"],
	[80, "⚽️ GOAL"],
	[92, "🔶 Yellow card"],
])

// create an array called events with the unique values
const events = [...new Set(gameEvents.values())]
console.log(events)

// the yellow card from minute 64 was discovered to be unfair so delete event 64
gameEvents.delete(64)

// Print the following:
// "An event happened, on average, every 9 minutes" (game has 90 minutes)
console.log(
	`An event happened, on average, every ${90 / gameEvents.size} minutes`
)

// get 92 minutes
const time = [...gameEvents.keys()].pop()
console.log(time)
console.log(
	`An event happened, on average, every ${time / gameEvents.size} minutes`
)

/*
loop over the events and log to the console marking wheter it is in the first
half or the second half (after 45 minutes) of the game like this:
[first half] 17: GOAL
*/
for (const [min, event] of gameEvents) {
	const half = min <= 45 ? "FIRST" : "SECOND"
	console.log(`[${half} HALF] ${min}: ${event}`)
}
/* -------------Challenge 3----------------*/
