// activate strict mode
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

// intentional error incorrect variable name
// this will output an error in 'use strict' mode 
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive : D');

// reserved words are applied in 'use strict' mode
// if you use a reserved word it will generate an error
// const interface = 'Audio';


// functions - call, run, or invoke a function
function logger(){
    console.log('My name is John Doe');
};
logger();

// function parameters pass data into a function
// in the example below 'apples' and 'oranges' are the parameters
// we passethe integers 5 and 0 into the parameters 'apples' and 'oranges', respectively
function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

// assign the function to a variable
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

// get different values for the function
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// function declarations
function callAge1(birthYear){
    return 2037 - birthYear;
};
const age1 = callAge1(1991);

// function expressions
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

// you can call a function declaration before it is defined in the code
const age3 = callAge3(1991);
function callAge3(birthYear){
    return `My age is ${2022- birthYear}`;
}
console.log(age3);

// Arrow Functions
// Arrow functions are a compact alternative to a functions expression but are limited 

// one-line arrow function assigned to a variable
const calcAge4 = birthYear => 2037 - birthYear;
const age4 = calcAge4(1991);
console.log(age4);

// multi-line arrow function assigned to a variable
// a multi-line arrow function requires the braces and return statement
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
};
console.log(yearsUntilRetirement(1991))

// multi-parameter arrow function
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age2 = 2037 - birthYear;
    const retirement = 65 - age2;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement2(1991, 'John'));
console.log(yearsUntilRetirement2(1980, 'Bob'));

// Functions calling other functions
function cutFruitPieces(fruit){
    return (fruit * 4);
};

function fruitProcessor2(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice2 = `Juice with ${applePieces} pieces of apple 
    and ${orangePieces} pieces of orange.`;
    return juice2;
};
console.log(fruitProcessor2(2, 3));

// convert and compare different types of functions
const yearsUntilRetirement5 = (birthYear, firstName) => {
    const age5 = 2037 - birthYear;
    const retirement5 = 65 - age5;
    return `${firstName} retires in ${retirement5} years.`;    
};
console.log(yearsUntilRetirement5(1991,'John'));

function yearsUntilRetirement6(birthYear, firstName){
    const age6 = 2037 - birthYear;
    const retirement6 = 65 - age6;
    return `${firstName} retires in ${retirement6} years.`;
};
console.log(yearsUntilRetirement6(1991,'John'));

const yearsUntilRetirement7 = function(birthYear, firstName){
    const age7 = 2037 - birthYear;
    const retirement7 = 65 - age7;
    return `${firstName} retires in ${retirement7} years.`;
};
console.log(yearsUntilRetirement7(1991,'John'));

const calcAge8 = function(birthYear){
    return 2037 - birthYear;
}
const yearsUntilRetirement8 = function(birthYear,firstName){
    const age8 = calcAge8(birthYear);
    const retirement8 = 65 - age8;
    return `${firstName} retires in ${retirement8} years.`;
}
console.log(yearsUntilRetirement8(1991,'John'));

const calcAge9 = function(birthYear){
    return 2037 - birthYear;
};
const yearsUntilRetirement9 = function(birthYear, firstName){
    const age9 = calcAge9(birthYear);
    const retirement9 = 65 - age9;

    if (retirement9 > 0) {
        return `${firstName} retires in ${retirement9} years.`;
    } else{
        return -1;
    };
}
console.log(yearsUntilRetirement9(1991,'John'));

// Arrays
//Create arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991,1984,2008,2032);
console.log(years);

// retrieve elements from arrays
// index starts at 0
console.log(friends[0]);
console.log(friends[2]);

// get the exact count of elements in the array
// index starts at 1
console.log(friends.length);
console.log(friends.length - 1);

// change elements in the array
friends[2] = 'Jay';
console.log(friends[2]);

// variables as elements in an array
const firstName1 = 'Jonas';
const jonas = [firstName1, 'Schmedtmann', 2037 - 1991];
console.log(jonas);

// an array inside of an array
const jonas2 = [firstName1, 'Schmedtman', 2037 -1991, friends];
console.log(jonas2[3]);

// short exercise
const calcAge10 = function(birthYear){
    return 2037 - birthYear;
};
const years1 = [1990, 1967, 2002, 2010, 2018];
const retAge1 = calcAge10(years1[0]);
const retAge2 = calcAge10(years1[1]);
const retAge3 = calcAge10(years1[2]);
const retAge4 = calcAge10(years1[3]);
const retAge5 = calcAge10(years1[4]);
console.log(`The retirement ages are ${retAge1},${retAge2},${retAge3},${retAge4},${retAge5}.`);

// trick to adjust the starting index number to 1
const adjRetAge1 = calcAge10(years1[years1.length - 1]);

// functions as elements in an array
const ages1 = [calcAge10(years1[0]), calcAge10(years1[1]), calcAge10(years1[2]), calcAge10(years1[3]), calcAge10(years1[4])];
console.log(ages1[1])

// Array Methods 
const friends1 = ['Michael', 'Steven', 'Peter'];

// add an element
friends1.push('Jay');
console.log(friends1);

// assign the new lenght to a variable
const newLength1 = friends1.push('Jay');
console.log(newLength1);

// add elements to the beginning of an array
friends1.unshift('John');
console.log(friends1);

// remove the last element from an array
friends1.pop();
console.log(friends1);

// remove the first element of an array
friends1.shift();
console.log(friends1);

// return the first index at which a given element can be found in the array
console.log(friends1.indexOf('Steven'));

// reutrn true or false if the element is in the array
console.log(friends1.includes('Steven'));

// use a conditional to test an array
if(friends1.includes('Steven')){
    console.log('Yes, Steven is there.');
} else {
    console.log('No');
};

// Assignment: arrays
function calcPerctWorld(perct){
    return `${(((perct / 9000).toFixed(3)) * 100)} percent`;
}
const populations = [350,1400,38,144];
if (populations.length === 4){
    console.log(`The array has lenght 4.`); 
} else {
    console.log("The array does not have a length of 4."); 
};
const perctUSA = calcPerctWorld(populations[0]);
const perctChina = calcPerctWorld(populations[1]);
const perctCanada = calcPerctWorld(populations[2]);
const perctRussia = calcPerctWorld(populations[3]);
const percentages = [perctUSA,perctChina,perctCanada,perctRussia];
console.log(percentages);

// Assignment: basic array methods
const neighbors = ['Togo', 'Burkina Faso', 'Cote d\'Ivoire'];
console.log(neighbors);
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
if (neighbors.includes('Germany')){
    console.log('Probably not a central European country.');
} else if (neighbors[0] === 'Togo'){
    neighbors.unshift('Sweden');
    console.log(neighbors);
};
console.log(neighbors);

// Introduction to objects
// Object create key, value pairs
const Jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
};
console.log(Jonas);

// Dot vs. Bracket Notation
// Get the properties from an object using a dot and the key
console.log(Jonas.lastName);

// Get the properties from an object using a key inside brackets 
console.log(Jonas['lastName']);

// Create variables from objects
const nameKey = 'Name';
console.log(Jonas['first' + nameKey]);
console.log(Jonas['last' + nameKey]);

const interestedIN = prompt('What do you want to know about Jonas? Choose between firstName, \
lastName, age, job, and friends');

// Using the dot to  access a property of an object that does not exist results in 'undefined'
console.log(Jonas.interestedIN); // output is undefined

// Use the bracket to access the key value
console.log(Jonas[interestedIN]);

// create a custom value when the user attempts to access a property that does not exist
// Truthy or Falsy value
if(Jonas[interestedIN]){
    console.log(Jonas[interestedIN]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
};

// Add new properties to the object
Jonas.location = 'Portugal';
Jonas['twitter'] = '@jonasschmedtman';
console.log(Jonas);

// Challenge - Write this sentence without hardcoding any of the values: Jonas, three, and Michael.
// "Jonas has three friends, and his best friends is called Michael."
console.log("\n----------coding challenge----------");
console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is ${Jonas['friends'][0]}.`);

// Assignment: Introduction to Objects
const myCountry = {
    country: 'United States of America',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 350,
    neighbors: ['Canada','Mexico']
};
console.log(myCountry);

// Assignment: Dot vs. Bracket Notation
// Using the object from the previous assignment, log this sting to the console:
// "The United States of America has 350 million English-speaking people, 2 neighbouring countries 
// the capital is called  'Washington, D.C."
const infoUSA = `The ${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,
${myCountry.neighbors.length} neighbouring countries and the capital is called ${myCountry.capital}`
console.log(infoUSA);

console.log('\n-----Increase the country population-----');
let increasePop = Number(prompt("Enter the the population increase: "));
console.log(typeof(increasePop))

myCountry.population +=20
const IncreasePopulationUSA = `The ${myCountry.country} has ${myCountry.population} million 
${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and 
the capital is called ${myCountry.capital}`;
console.log(IncreasePopulationUSA);

myCountry.population -=20
console.log(IncreasePopulationUSA);

// Object Methods - add functions to objects
const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense2: true,

    // creates a method using a function expression
    // a function declaration would return an error 
    calcAge: function(birthYear){
        return 2037 - birthYear
    }
};

// Access the method
// pass in the argument 'birthYear' by accessing the property from the object
console.log(jonas2.calcAge(jonas2.birthYear));
console.log(jonas2['calcAge'](jonas2['birthYear']));

// Object Methods - Access object methods using the 'this' keyword
// 'this' keyword directly accessess an object property intead of using an argument
const jonas3 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense2: true,

    // read 'birthyear' directly from the object itself without using an argument
    calcAge2: function(birthYear){
        console.log(this); // 'this' keyword points to the object jonas3
        return 2037 - this.birthYear;
    }
};
console.log(jonas3.calcAge2());

// Object Methods - create a property using the 'this' keyword
const jonas4 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense2: true,

    // use 'this' to create an age property 
    calcAge3: function(){
        this.age = 2035 - this.birthYear; // change the date
        return this.age;
    }
};
console.log(jonas4.calcAge3());
console.log(jonas4.age);

// Assignment: Object Methods
const MyCountry2 = {
    country: 'United States of America',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 350,
    neighbors: ['Canada','Mexico'],

    // method to describe your country
    describe: function(){
        const countryDescription = `The ${this.country} has a population of ${this.population} \
        million, the capital is ${this.capital}, \
        and our neighbors are ${this.neighbors[0]} and ${this.neighbors[1]}.`
        return countryDescription;
    },

    // method 
    checkIsland: function(){
        const isIsland = `The ${this.country} ${this.neighbors.length > 0 ? 'has' : 'does not have'} neighbors.`;
        return isIsland;
    },

    checkIsland2: function(){
        this.island2 = this.neighbors.length === 0 ? true : false;
        return this.island2
    }

};
console.log(MyCountry2.describe());
console.log(MyCountry2.checkIsland());
console.log(MyCountry2.checkIsland2());
*/


