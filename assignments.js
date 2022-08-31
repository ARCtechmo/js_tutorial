// Assignment: Values and Variables
console.log('-----Begin: Assignment 1: Values and Variables-----');

// declare variables
let country = 'United States of America';
let continent = 'North America';
let population = '350 million';

//log the values of the variables to the console
console.log('I live in the', country, '.');
console.log('The', country, 'is in', continent, '.');
console.log('The', country, 'has a population of', population, '.');
console.log('-----End: Assignment 1: Values and Variables-----');

// Assignment: Data Types
console.log('-----Begin: Assignment 2: Data Types-----');
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log('-----End: Assignment 2: Data Types-----');

// Assignment: Declare Variables
console.log('\n------Begin Assignment 3: Declare Variables-------');
console.log('Reassign the variable "language."');
language = 'English'
console.log('The language of my country is', language + '.');

console.log('Make some constant variables.');
const numStates = 50
console.log('There are', numStates, 'states in the', country + '.')
console.log('------End Assignment 3: Declare Variables-------');

// Assignment: Basic Operators
console.log('\n-------Begin Assignment 4: Basic Operators--------');
population = 350000000
let halfPop = (population / 2);
console.log('Half the population:', halfPop);

halfPop++
console.log('Increase the half-population by 1 using halfPopulation++:', halfPop);

let popFinland = 6000000
console.log('Is Finland\'s population less than the U.S?', popFinland < halfPop);

avgPopulation = 33000000
console.log('Is the avg. pop. < half the U.S?', avgPopulation < halfPop);

const description = 'The ' + country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language + '.';
console.log(description);

console.log('\n-------End Assignment 4: Basic Operators--------');

// Assignment: Strings and Template Literals
console.log('\n------Begin Assignment 5: Strings and Template Literals --------');
const description2 = `The ${country} is in ${continent} and its ${population} people speak ${language}.`;
console.log(description2)
console.log('------End Assignment 5: Strings and Template Literals------');

// Assignment: if-else statements
console.log('\n-------Begin Assignment 6: if-else statements------');
population = 350000000;
if (population > avgPopulation) {
    console.log(`The ${country}'s population is above average.`);
} else {
    console.log(`The ${country}'s population is ${(avgPopulation - population)} below average`);
}
console.log('-------End Assignment 6: if-else statements------');

// Assignment: Type Conversion and Coercion
// Predict the results without executing then check your answers
console.log('\n------Begin Assignment: Type Conversion and Coercion-----------')
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57) // False
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
console.log('\n------End Assignment: Type Conversion and Coercion-----------');

// Assignment: Equality Operators == vs ===
// Always use the strict equality operator ===
// const numNeighbours = Number(prompt("How many neighbour countries does you country have?"));
if (numNeighbours === 1) {
    console.log('Only 1 border')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('numNeighbours is 0 or any other value')
}

// Assignment: Logical Operators
questionCountry = prompt('Pick a country');
questionPop = Number(prompt("What is the population?: "));
questionIsland = prompt("Is this country an island?: (Y/N): ");
questionLang = prompt("What is the language?: ");
if ((questionPop > 25000000) && (questionIsland === 'N' | 'n') && (questionLang === "English" | "english")) {
    console.log(`You should live in ${questionCountry}.`)
} else {
    console.log(`You should not live in ${questionCountry}.`)
};