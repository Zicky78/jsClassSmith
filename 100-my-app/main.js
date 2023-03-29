import { calLog, calcTotal, entry, findLog } from "./log.js";
import { displayLogBook } from "./render.js";

const FORM = document.getElementById("form-input");

FORM.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get the current date
	let date = new Date();

	// Create an object "items" to store a food entry
	let items = {
		food: e.target.food.value,
		calories: parseInt(e.target.calories.value),
		amount: parseInt(e.target.amount.value),
	};

	// Get exercise true/false
	let exercise = e.target.exercise.checked;

	// Check if there is already an entry for the current date
	// Returns a false boolean if false, or the entry object if true
	let foundEntry = findLog(date);

	if (foundEntry) {
		// Push items to the items array
		foundEntry.items.push(items);
		// Add to calories burned if exercised
		if (exercise) {
			foundEntry.calBurned += parseInt(e.target.calBurned.value);
		}
		console.log(foundEntry);
	} else {
		// Initialize calBurned to 0 in case there's no exercise, and then change it to the targeted value if there is
		let calBurned = 0;
		if (exercise) {
			calBurned = parseInt(e.target.calBurned.value);
		}
		// Push a new entry with the created data to the calorie logbook
		calLog.push(new entry(date, items, exercise, calBurned));
	}
	// Re-calculate the totals
	calcTotal();

	// Display log book
	displayLogBook();

	// Reset form
	FORM.reset();
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
