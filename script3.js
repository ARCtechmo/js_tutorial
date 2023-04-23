"use strict"
// function calcAge(birthyear) {
// 	const age = 2037 - birthyear;
// 	console.log(firstName);
// 	return age;
// }
// const firstName = "JohnDoe";
// calcAge(1991);

// function calcAge2(birthyear2) {
// 	const age2 = 2037 - birthyear2;

// 	function printAge() {
// 		const output = `${firstName2} You are ${age2}, born in ${birthyear2}`;
// 		console.log(output);

// 		if (birthyear2 >= 1981 && birthyear2 <= 1996) {
// 			const str = `Oh, and you are a millenial, ${firstName2}`;
// 			console.log(str);

// 			function add(a, b) {
// 				return a + b;
// 			}
// 			console.log(add(10, 5));
// 		}
// 	}
// 	printAge();
// 	return age2;
// }
// const firstName2 = "Jonas";
// calcAge2(1991);

// Hoisting example
// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// this keyword
// "this" is a special variable that is created for every function
// "this" takes the value of (points to) the "owner" of the function
// "this" is undefined in simple fnction calls

/*
// this: a global variable
console.log(this)

// this: undefined in a regular function call
const calcAge3 = function (birthyear) {
	console.log(2037 - birthyear)
	console.log(this)
}
calcAge3(1991)

// this: arrow function uses the "this" parent scope
const calcAgeArrow = (birthyear) => {
	console.log(2031 - birthyear)
	console.log(this)
}
calcAgeArrow(1980)

// this: method call
const JohnDoe = {
	name: "John",
	year: 1989,
	calcAge: function () {
		return 2037 - this.year
	},
}
console.log(JohnDoe.calcAge())

// this: method borrowing
const matilda = {
	year: 2017,
}
matilda.calcAge = JohnDoe.calcAge
console.log(matilda.calcAge())
*/

// arrow function does not get its own 'this' keyword
// const johnDoe = {
//   firstName: 'Jonas',
//   year: '1991',
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// johnDoe.greet();
// console.log(this.firstName);

/*
// function inside a method
const johnDoe = {
  firstName: 'Jonas',
  year: '1991',
  calcAge: function () {
    console.log(2037 - this.year);

    // 'this' keyword is undefined inside a regular function
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial(); // function call returns undefined

    // 'this' keyword uses its parent scope inside an arrow function
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
*/

/*
// arguments in functions
const addExpr2 = function (a, b) {
	console.log(arguments);
	return a + b;
};
console.log(addExpr2(1, 2, 3));
*/

/*
// primitives types vs reference (objects) types
let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const me = {
	name: "JonnDoe",
	age: 30,
}
const friend = me
friend.age = 27
console.log("friend", friend)
console.log("me", me)

let lastName = "Williams"
let oldLastName = lastName
lastName = "Davis"
console.log(lastName, oldLastName)

const jessica = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
}
const marriedJessica = jessica
marriedJessica.lastName = "Davis"
console.log("Before marriage: ", jessica)
console.log("After marriage: ", marriedJessica)

// copying objects - shallow clone on the first level only
// create a new empty object and merge it with an existing object
const jessica2 = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
}
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = "Davis"
console.log("Before marriage: ", jessica2)
console.log("After marriage: ", jessicaCopy)
*/
