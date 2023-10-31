"use strict";

///////////////////////////////////////
// Modal window

// Select DOM elements to work with
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// Function to open the modal and remove the hidden class from modal and overlay
const openModal = function (e) {
	e.preventDefault();
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

// Function to close the modal and add the hidden class back to modal and overlay
const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

// Attach openModal function to each button with the class 'btn--show-modal'
btnsOpenModal.forEach(function (btn) {
	btn.addEventListener("click", openModal);
});

// Attach closeModal function to the close button and overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Listen for the 'keydown' event on the document. Close modal if Escape key is pressed
document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});

// Select Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.querySelector(".header"));
// console.log(document.body);

// Select multiple elements
document.querySelectorAll;

// create a node list  - most common method to select elements
// node lists do not automatically update changes to the elements
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");

// return an HTML (live) collection
// updates automatically as elements are updated
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

// select all p elements
// paragraphs is a Nodelist that contains all the <p> elements in the document
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs[0].nodeName);

// get elements by class name
const getByClassName = document.getElementsByClassName("btn");
console.log(getByClassName);

// create, read, and set HTML elements
// .insertAdjacentHTHML
// create a DOM object that can be used to do something
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookies for improved analytics.";
message.innerHTML =
	'We use cookies for improved analytics. <button class="btn btn--close-cookie">Got it!</ button>';
// header.prepend(message);
// header.append(message);

// Delete elements
document
	.querySelector(".btn--close cookie")
	.addEventListener("click", function () {
		message.remove();
	});

// style (in-line styles) set directly in the DOM
console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
	Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// access attributues
const logo = document.querySelector(".nav__logo");
console.log(logo);
