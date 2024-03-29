import { calLog, Entry, findLog, saveLog } from "./log.js";

// All of the DOM elements that need to be accessed
const exerciseCheckBox = document.querySelector("#exercise");
const calBurnedLabel = document.querySelector("#cal-burned-label");
const calBurnedInput = document.querySelector("#calBurned");
const entryOutput = document.querySelector("#entry-output");
const ERR = document.querySelector("#err");
const exerciseOutput = document.querySelector("#exercise-output");
const calTotalOutput = document.querySelector("#cal-total-output");
const FORM = document.querySelector("#form-input");
const dateOutput = document.querySelector("#date");
const navLeft = document.querySelector("#nav-left");
const navRight = document.querySelector("#nav-right");

// ChatGPT-generated modal code
const modalContainer = document.querySelector("#modal-container");
const closeBtn = document.querySelector("#close-modal-btn");
const backdrop = document.querySelector("#backdrop");
const openBtn = document.querySelector("#open-modal-btn");

// Controls the event listener for closing the modal
let modalListener = true;
function toggleModalListenerOn() {
	if (!modalListener) {
		modalListener = true;
	}
}

// Open the modal
function openModal() {
	modalContainer.style.display = "block";
	backdrop.style.display = "block";
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
		calBurnedLabel.classList.remove("hidden");
		calBurned.classList.remove("hidden");
	} else {
		calBurnedLabel.classList.add("hidden");
		calBurned.classList.add("hidden");
	}
});

// Display the log book
function displayLogBook(Entry) {
	// Clear the display
	entryOutput.innerHTML = "";
	// Display the date
	displayDate(Entry.date);
	// Loop through each Entry's items
	Entry.items.forEach((item) => {
		// Create the item output
		const itemOutput = createItem(item);
		// Add the edit and delete buttons
		renderEditDeleteBtns(itemOutput, item, Entry);
		// Add the item output to the Entry output
		entryOutput.appendChild(itemOutput);
	});

	exerciseOutput.textContent = `${Entry.calBurned}`;
	calTotalOutput.textContent = `${Entry.calTotal}`;
}

// Create an element, with optional class name and text
function createElement(element, className = "", text = "") {
	const el = document.createElement(element);
	if (text !== "") {
		el.textContent = text;
	}
	if (className !== "") {
		el.classList.add(className);
	}
	return el;
}

// Create the item output
function createItem(item) {
	const itemOutput = createElement("div", "item-output");
	const foodOutput = createElement("p", "col", `${item.food}`);
	const calorieOutput = createElement("p", "col", `${item.calories}`);
	const amountOutput = createElement("p", "col", `${item.amount}`);
	itemOutput.appendChild(foodOutput);
	itemOutput.appendChild(calorieOutput);
	itemOutput.appendChild(amountOutput);
	return itemOutput;
}

// Create the edit and delete buttons
function createEditDelBtns() {
	// Create the buttons and images
	const editBtn = createElement("button");
	const editImg = createElement("img");
	editImg.src = "./img/edit.png";
	const delBtn = createElement("button");
	const delImg = createElement("img");
	delImg.src = "./img/delete.png";
	// Append the images to the buttons
	editBtn.appendChild(editImg);
	delBtn.appendChild(delImg);

	return { editBtn, delBtn };
}

// Render the edit and delete buttons
function renderEditDeleteBtns(itemOutput, item, Entry) {
	// Create the buttons
	const { editBtn, delBtn } = createEditDelBtns();

	// Edit button event listener
	editBtn.addEventListener("click", (e) => {
		// Open the modal and fill in the form, and splice the item
		console.log(Entry);
		openModal();
		modalListener = false;
		FORM.food.value = item.food;
		FORM.calories.value = item.calories;
		FORM.amount.value = item.amount;
		Entry.items.splice(Entry.items.indexOf(item), 1);
		// Save the log
		saveLog();
	});
	// Append edit button
	itemOutput.appendChild(editBtn);

	// Delete button event listener
	delBtn.addEventListener("click", (e) => {
		// Delete the item
		Entry.deleteItem(item);
		// Display the log book
		displayLogBook(Entry);
		// Save the log
		saveLog();
	});

	// Create a container for the buttons
	const btnContainer = createElement("div", "btn-container");
	// Append the buttons to the container
	btnContainer.appendChild(editBtn);
	btnContainer.appendChild(delBtn);

	// Append the container to the item output
	itemOutput.appendChild(btnContainer);
}

// Display the error messages
function displayErrors(errors) {
	const msg = document.createElement("p");
	msg.textContent = errors;
	ERR.appendChild(msg);
}

// Hide the calories burned input
function hideCalBurned() {
	calBurnedLabel.classList.add("hidden");
	calBurnedInput.classList.add("hidden");
}

// Navigate to the next Entry
function navigateRight() {
	// Get the date of the currently displayed Entry
	const currentDate = getDateFromPage();
	// Check if a next Entry exists
	const nextDate = new Date();
	nextDate.setDate(currentDate.getDate() + 1);
	const nextEntry = findLog(nextDate);
	// Display the next Entry
	if (nextEntry) {
		displayLogBook(nextEntry);
	}
}

// Navigate to the previous Entry
function navigateLeft() {
	// Get the date of the currently displayed Entry
	const currentDate = getDateFromPage();
	// Check if a previous Entry exists
	const prevDate = new Date();
	prevDate.setDate(currentDate.getDate() - 1);
	const prevEntry = findLog(prevDate);
	// Display the previous Entry
	if (prevEntry) {
		displayLogBook(prevEntry);
	}
}

// Display the date to the screen formatted
function displayDate(date) {
	dateOutput.textContent = `${date.toLocaleDateString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
	})}`;
}

// Get the formatted date from the page and return the date object
function getDateFromPage() {
	const date = new Date(dateOutput.textContent);
	return date;
}

// Add event listeners to the navigation buttons
navLeft.addEventListener("click", navigateLeft);
navRight.addEventListener("click", navigateRight);

export {
	displayLogBook,
	displayErrors,
	ERR,
	hideCalBurned,
	FORM,
	closeModal,
	toggleModalListenerOn,
	displayDate,
	getDateFromPage,
};
