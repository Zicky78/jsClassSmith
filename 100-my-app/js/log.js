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
const calLog = loadLog();

if (calLog !== []) {
	displayLogBook();
	calLog.forEach((entry) => {
		entry.calcTotals();
	});
}

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
	calcTotals = function () {
		// Reset the calTotal for the entry
		this.calTotal = 0;
		this.items.forEach((item) => {
			// Sum the calories of each of the items in the entry
			this.calTotal += item.calories * item.amount;
		});
		this.calTotal -= this.calBurned;
	};

	deleteItem = function (item) {
		// Remove the item from the items array
		this.items.splice(this.items.indexOf(item), 1);
		// Re-calculate the totals
		this.calcTotals();
	};
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

// Save the log to local storage
function saveLog() {
	// create a new array to store the log in
	let storedLog = [];
	// Loop through the log and push each entry to the new array
	// convert the date and object methods so they can be retrieved from local storage
	calLog.forEach((entry) => {
		storedLog.push({
			date: entry.date.getTime(),
			items: entry.items,
			calTotal: entry.calTotal,
			exercise: entry.exercise,
			calBurned: entry.calBurned,
			calcTotals: entry.calcTotals.toString(),
			deleteItem: entry.deleteItem.toString(),
		});
	});
	// Store the log in local storage
	localStorage.setItem("storedLog", JSON.stringify(storedLog));
}

// Load the log from local storage
function loadLog() {
	// Retrieve the log from local storage
	const log = JSON.parse(localStorage.getItem("storedLog"));
	// Convert the date and object methods so they can be used
	if (log !== null) {
		log.forEach((entry) => {
			entry.calcTotals = new Function("return " + entry.calcTotals)();
			entry.deleteItem = new Function("return " + entry.deleteItem)();
			entry.date = new Date(parseInt(entry.date));
		});
		return log;
	} else {
		return [];
	}
}

export { calLog, entry, findLog, saveLog, loadLog };
