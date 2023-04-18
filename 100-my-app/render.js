import { calLog, entry } from "./log.js";

const exerciseCheckBox = document.getElementById("exercise");
const calBurnedInput = document.getElementById("cal-burned-input");
const entryOutput = document.getElementById("entry-output");
const ERR = document.getElementById("err");

// ChatGPT-generated modal code
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-modal-btn');
const backdrop = document.getElementById('backdrop');
const openBtn = document.getElementById('open-modal-btn');

// Open the modal
function openModal() {
  modalContainer.style.display = 'block';
  backdrop.style.display = 'block';
}

// Close the modal
function closeModal() {
  modalContainer.style.display = 'none';
  backdrop.style.display = 'none';
}

// Open the modal when clicking the open button
openBtn.addEventListener('click', openModal);

// Close the modal when clicking the close button
closeBtn.addEventListener('click', closeModal);

// Close the modal when clicking outside the modal content
backdrop.addEventListener('click', closeModal);

// Control if calories burned input is shown based on status of exercise check box
exerciseCheckBox.addEventListener("change", (e) => {
	if (exerciseCheckBox.checked) {
		calBurnedInput.classList.remove("hidden");
	} else {
		calBurnedInput.classList.add("hidden");
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
			foodOutput.textContent = item.food;
			let amountOutput = document.createElement("p");
			amountOutput.textContent = `Servings: ${item.amount} x ${item.calories}`;
			let calorieOutput = document.createElement("p");
			calorieOutput.textContent = `Calories: ${item.amount * item.calories}`;

			itemOutput.appendChild(foodOutput);
			itemOutput.appendChild(amountOutput);
			itemOutput.appendChild(calorieOutput);

			entryOutput.appendChild(itemOutput);
		});

		let totalOutputs = document.createElement("div");
		totalOutputs.classList.add("total-outputs");

		let exerciseOutput = document.createElement("h3");
		exerciseOutput.textContent = `Exercise: ${entry.calBurned} calories burned!`;
		entryOutput.appendChild(exerciseOutput);

		let calTotalOutput = document.createElement("h3");
		calTotalOutput.textContent = `Total Calories Today: ${entry.calTotal}`;

		totalOutputs.appendChild(exerciseOutput);
		totalOutputs.appendChild(calTotalOutput);
		entryOutput.appendChild(totalOutputs);
	});
}

// Display the error messages
function displayErrors(errors) {
	let msg = document.createElement("p");
	msg.textContent = errors;
	ERR.appendChild(msg);
}



export { displayLogBook, displayErrors, ERR, calBurnedInput };
