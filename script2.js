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

*/


