import { calLog, entry, findLog, calcTotal } from "./log.js";

const exerciseCheckBox = document.getElementById("exercise");
const calBurnedInput = document.getElementById("cal-burned-input");
const calBurned = document.getElementById("calBurned");
const entryOutput = document.getElementById("entry-output");
const ERR = document.getElementById("err");
const exerciseOutput = document.getElementById("exercise-output");
const calTotalOutput = document.getElementById("cal-total-output");
const FORM = document.getElementById("form-input");

// ChatGPT-generated modal code
const modalContainer = document.getElementById("modal-container");
const closeBtn = document.getElementById("close-modal-btn");
const backdrop = document.getElementById("backdrop");
const openBtn = document.getElementById("open-modal-btn");

// Open the modal
function openModal() {
	modalContainer.style.display = "block";
	backdrop.style.display = "block";
}

// Controls the event listener for closing the modal
let modalListener = true;

function toggleModalListenerOn() {
	if (!modalListener) {
		modalListener = true;
	}
}

// Close the modal
function closeModal() {
	if (modalListener) {
		modalContainer.style.display = "none";
		backdrop.style.display = "none";
		FORM.reset();
	}
}

// Open the modal when clicking the open button
openBtn.addEventListener("click", openModal);

// Close the modal when clicking the close button
closeBtn.addEventListener("click", closeModal);

// Close the modal when clicking outside the modal content
backdrop.addEventListener("click", closeModal);

// Control if calories burned input is shown based on status of exercise check box
exerciseCheckBox.addEventListener("change", (e) => {
	if (exerciseCheckBox.checked) {
		calBurnedInput.classList.remove("hidden");
		calBurned.classList.remove("hidden");
	} else {
		calBurnedInput.classList.add("hidden");
		calBurned.classList.add("hidden");
	}
});

// Display the log book
function displayLogBook() {
	// Clear the display
	entryOutput.innerHTML = "";
	// Loop through each entry
	calLog.forEach((entry) => {
		// Loop through each entry's items
		let date = entry.date;
		entry.items.forEach((item, index) => {
			// Create elements and append them to the DOM
			let itemOutput = document.createElement("div");
			itemOutput.classList.add("item-output");

			let foodOutput = document.createElement("p");
			foodOutput.classList.add("col");
			foodOutput.textContent = item.food;
			let calorieOutput = document.createElement("p");
			calorieOutput.classList.add("col");
			calorieOutput.textContent = `${item.calories}`;
			let amountOutput = document.createElement("p");
			amountOutput.classList.add("col");
			amountOutput.textContent = `${item.amount}`;

			itemOutput.appendChild(foodOutput);
			itemOutput.appendChild(calorieOutput);
			itemOutput.appendChild(amountOutput);

			// Render the edit and delete buttons
			renderEditDeleteBtns(itemOutput, item, index, date);

			entryOutput.appendChild(itemOutput);
		});

		exerciseOutput.textContent = `${entry.calBurned}`;
		calTotalOutput.textContent = `${entry.calTotal}`;
	});
}

// Render the edit and delete buttons
// Pass in element to append buttons too,
// the item to fill in the data to the form
// the index of the item to splice it
// and the date the item is from to find its correct entry
function renderEditDeleteBtns(itemOutput, item, index, date) {
	// Find the entry
	let entry = findLog(date);
	// Create the buttons
	let editBtn = document.createElement("button");
	let editImg = document.createElement("img");
	editImg.src = "./img/edit.png";
	let delBtn = document.createElement("button");
	let delImg = document.createElement("img");
	delImg.src = "./img/delete.png";
	// Append the images to the buttons
	editBtn.appendChild(editImg);
	delBtn.appendChild(delImg);

	// Edit button event listener
	editBtn.addEventListener("click", (e) => {
		// Open the modal and fill in the form, and splice the item
		openModal();
		modalListener = false;
		FORM.food.value = item.food;
		FORM.calories.value = item.calories;
		FORM.amount.value = item.amount;
		entry.items.splice(index, 1);
	});
	// Append edit button
	itemOutput.appendChild(editBtn);
	// Delete button event listener
	delBtn.addEventListener("click", (e) => {
		// Splice the item
		entry.items.splice(index, 1);
		// Recalculate the total and display the log book
		calcTotal();
		displayLogBook();
	});

	// Create a container for the buttons
	let btnContainer = document.createElement("div");
	btnContainer.classList.add("btn-container");
	// Append the buttons to the container
	btnContainer.appendChild(editBtn);
	btnContainer.appendChild(delBtn);

	// Append the container to the item output
	itemOutput.appendChild(btnContainer);
}

// Display the error messages
function displayErrors(errors) {
	let msg = document.createElement("p");
	msg.textContent = errors;
	ERR.appendChild(msg);
}

export {
	displayLogBook,
	displayErrors,
	ERR,
	calBurnedInput,
	FORM,
	closeModal,
	toggleModalListenerOn,
};
