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
