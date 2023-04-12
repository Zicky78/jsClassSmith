import { calLog, entry } from "./log.js";

const exerciseCheckBox = document.getElementById("exercise");
const calBurnedInput = document.getElementById("cal-burned-input");
const entryOutput = document.getElementById("entry-output");
const ERR = document.getElementById("err");

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

		let exerciseOutput = document.createElement("h3");
		exerciseOutput.textContent = `Exercise: ${entry.calBurned} calories burned!`;
		entryOutput.appendChild(exerciseOutput);

		let calTotalOutput = document.createElement("h3");
		calTotalOutput.textContent = `Total Calories Today: ${entry.calTotal}`;
		entryOutput.appendChild(calTotalOutput);
	});
}

// Display the error messages
function displayErrors(errors) {
	let msg = document.createElement("p");
	msg.textContent = errors;
	ERR.appendChild(msg);
}

export { displayLogBook, displayErrors, ERR, calBurnedInput };
