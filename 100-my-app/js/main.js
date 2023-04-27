import { calLog, entry, findLog } from "./log.js";
import {
	displayLogBook,
	displayErrors,
	ERR,
	hideCalBurned,
	FORM,
	closeModal,
	toggleModalListenerOn,
} from "./render.js";

function validateForm(food, calories, amount, exercise, calBurned) {
	// Clear the error messages on the DOM
	ERR.textContent = "";
	// Create an array to store the error messages
	const errors = [];

	// Check if no food and no exercise were submitted
	if (!food && !exercise) {
		errors.push(
			"Please enter a food entry, exercise, or both before submitting"
		);
	}

	// Check to see if a food was entered. If it was, calories and amount are required to be greater than zero
	// If not, check if calories or amount were entered without food name
	if (food) {
		if (calories <= 0 || isNaN(calories)) {
			errors.push("Tic-Tacs aren't food. Enter calories greater than zero");
		}
		if (amount <= 0 || isNaN(amount)) {
			errors.push("Please enter a serving size greater than zero");
		}
	} else if (calories || amount) {
		errors.push("Food name required for food entries");
	}

	// Check to see if exercise was entered. If it was, calories burned is required to be greater than zero
	if (exercise) {
		if (calBurned <= 0 || isNaN(calBurned)) {
			errors.push("Please enter calories burned greater than zero");
		}
	}

	// If there are error messages, display the errors. If not, return true
	if (errors.length > 0) {
		displayErrors(errors);
	} else {
		return true;
	}
}

FORM.addEventListener("submit", (e) => {
	e.preventDefault();

	// Grab the values from the form
	let food = e.target.food.value;
	let calories = parseInt(e.target.calories.value);
	let amount = parseInt(e.target.amount.value);
	let exercise = e.target.exercise.checked;
	let calBurned = 0;
	if (exercise) {
		calBurned = parseInt(e.target.calBurned.value);
	}

	// Validate the form
	let isValid = validateForm(food, calories, amount, exercise, calBurned);

	if (isValid) {
		// Get the current date
		const date = new Date();

		// Check if there is already an entry for the current date
		// Returns a false boolean if false, or the entry object if true
		let foundEntry = findLog(date);

		//Create an object "items" to store a food entry
		let item = {};

		// If food was entered, update items
		if (food) {
			item = {
				food: food,
				calories: calories,
				amount: amount,
			};
		}

		//Update found entry if found, or create new entry if not found
		if (foundEntry) {
			// Push items to the items array if food was entered
			if (food) {
				foundEntry.items.push(item);
			}
			// Add to calories burned if exercised
			if (exercise) {
				foundEntry.calBurned += calBurned;
			}
		} else {
			// Push a new entry with the created data to the calorie logbook
			calLog.push(new entry(date, item, exercise, calBurned));
		}

		// Re-calculate the totals
		calLog.forEach((entry) => {
			entry.calcTotals();
		});

		// Display log book
		displayLogBook();

		// Reset form
		FORM.reset();
		toggleModalListenerOn();
		closeModal();

		// Hide the calories burned input
		hideCalBurned();
	}
});

// Calorie Counting App

// Create Food Entries
//      Form Input from User
//      Exercise Check Box that brings up text box to input calories burned
//      Perform Calorie Totalling
//      Store in Array of Objects and then in local storage

//      BMR Calc to Find Recommended Caloric Intake (Optional)
//      Formula from: https://diabetesstrong.com/how-to-find-your-daily-calorie-need/
//      or input your own daily limit manually
//      to see how many remaining calories you have for the day

// Read / Display Entries
//      Check local storage for pre-existing data
//      Display entries by day/time
//      Buttons for pagination

// Update / Edit Entries
//      Edit food name, calorie count, amount, etc
//      Edit exercise
//      Re-display and re-store in local storage

// Delete Entries
//      Delete entry from data
//      Re-display and re-store in local storage
