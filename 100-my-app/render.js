import { calLog, entry } from "./log.js";

const exerciseCheckBox = document.getElementById("exercise");
const calBurnedInput = document.getElementById("cal-burned-input");
const calBurned = document.getElementById("calBurned");
const entryOutput = document.getElementById("entry-output");
const ERR = document.getElementById("err");
const exerciseOutput = document.getElementById("exercise-output");
const calTotalOutput = document.getElementById("cal-total-output");

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

// Close the modal
function closeModal() {
	modalContainer.style.display = "none";
	backdrop.style.display = "none";
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
		entry.items.forEach((item) => {
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

			entryOutput.appendChild(itemOutput);
		});

		exerciseOutput.textContent = `${entry.calBurned}`;
		calTotalOutput.textContent = `${entry.calTotal}`;
	});
}

// Display the error messages
function displayErrors(errors) {
	let msg = document.createElement("p");
	msg.textContent = errors;
	ERR.appendChild(msg);
}

export { displayLogBook, displayErrors, ERR, calBurnedInput };
