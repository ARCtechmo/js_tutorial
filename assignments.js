'strict mode'
/*
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

// Assignment: The Switch Statement
const language = 'chinese';
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers.');
        break;
    case english:
        console.log('3rd place');
        break;
    case hindi:
        console.log('Number 4');
        break;
    case arabic:
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
}

// Assignment: The Conditional (Ternary) Operator
let country = prompt()
let population = Number(prompt());
population > 33000000 ? console.log(`${country}'s population is above `) : console.log(`${country}'s population is below.`)
*/

// Assignment: Functions
function describeContry(country,population,capitalCity){
    return `${country} has ${population} people and its capital city is ${capitalCity}.`;
};
const varCountry1 = describeContry('Finland','6 million','Helsinki');
const varCountry2 = describeContry('USA','350 million','Washington, D.C');
const varCountry3 = describeContry('U.K.','67.22 million','London');
console.log(varCountry1);
console.log(varCountry2);
console.log(varCountry3);

// Assignment: Function Declarions and Expressions
function percentageOfWorld(population){
    return Number((population / 7900 ) * 100).toFixed(2);
};
const perctCountry1 = percentageOfWorld(1441);
const perctCountry2 = percentageOfWorld(350);
const perctCountry3 = percentageOfWorld(67.22);
console.log(`China has ${perctCountry1} percent of the global population.`);
console.log(`The USA has ${perctCountry2} percent of the global population.`);
console.log(`The U.K. has ${perctCountry3} percent of the global population.`);

//Assignment: Arrow Functions
const percentageOfWorld1 = population =>(population / 7900) * 100;
const perctCountry4 = percentageOfWorld1(10);
const perctCountry5 = percentageOfWorld1(1441);
const perctCountry6 = percentageOfWorld1(332);
console.log(perctCountry4.toFixed(2));
console.log(perctCountry5.toFixed(2));
console.log(perctCountry6.toFixed(2));

// Assignment: functions calling other functions
const percentageOfWorld2 = population =>((population / 7900 )* 100);
function describePopulation(country,population){
    return `${country} has ${(population)} million people, which is about ${(percentageOfWorld2(population)).toFixed(2)} of the world.`
};
console.log(describePopulation('China',1411));
