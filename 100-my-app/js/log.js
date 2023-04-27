// Data Structure
/*
const calLog = [{entry},...]

const calLog = [{
    day: Date(),
    items: [{
        food: 'apple',
        calories: 35,
        amount: 1
    }],
    calTotal: 0,
    exercise: false,
    calBurned: 0
}]
*/

import { displayLogBook } from "./render.js";

// Calorie logbook holding all of the entries
const calLog = [];

// Constructor to make new entries. this.items becomes an array holding the items object that is passed in
class entry {
	constructor(date, item, exercise, calBurned) {
		this.date = date;
		this.items = [item];
		this.calTotal = 0;
		this.exercise = exercise;
		this.calBurned = calBurned;
	}

	// Calculate the total for the entry
	calcTotals = function() {
			// Reset the calTotal for the entry
			this.calTotal = 0;
			this.items.forEach((item) => {
				// Sum the calories of each of the items in the entry
				this.calTotal += item.calories * item.amount;
			});
			this.calTotal -= this.calBurned;
	}

	deleteItem = function(item) {
		// Remove the item from the items array
		this.items.splice(this.items.indexOf(item), 1);
		// Re-calculate the totals
		this.calcTotals();
		// Display log book
		displayLogBook();
	}

	
	
}

// Check if an entry exists for the current day
// Returns the entry if true, and false if false
function findLog(date) {
	for (const entry of calLog) {
		if (
			entry.date.getDate() === date.getDate() &&
			entry.date.getMonth() === date.getMonth() &&
			entry.date.getYear() === date.getYear()
		) {
			return entry;
		}
	}

	return false;
}



export { calLog, entry, findLog};
