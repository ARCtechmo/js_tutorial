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