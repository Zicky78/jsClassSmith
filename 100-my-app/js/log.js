// Data Structure
/*
	const calLog = [{Entry},...]

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
	},...]
*/

import { displayLogBook, displayDate } from "./render.js";

// Calorie logbook holding all of the entries
const calLog = loadLog();

// Constructor to make new entries. this.items becomes an array holding the items object that is passed in
class Entry {
	constructor(date, item, exercise, calBurned) {
		this.date = date;
		this.items = [item];
		this.calTotal = 0;
		this.exercise = exercise;
		this.calBurned = calBurned;
	}

	// Calculate the total for the Entry
	calcTotals = function () {
		// Reset the calTotal for the Entry
		this.calTotal = 0;
		this.items.forEach((item) => {
			// Sum the calories of each of the items in the Entry
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

// Check if an Entry exists for the current day
// Returns the Entry if true, and false if false
function findLog(date) {
	for (const Entry of calLog) {
		if (
			Entry.date.getDate() === date.getDate() &&
			Entry.date.getMonth() === date.getMonth() &&
			Entry.date.getYear() === date.getYear()
		) {
			return Entry;
		}
	}

	return false;
}

// Save the log to local storage
function saveLog() {
	// create a new array to store the log in
	let storedLog = [];
	// Loop through the log and push each Entry to the new array
	// convert the date and object methods so they can be retrieved from local storage
	calLog.forEach((Entry) => {
		storedLog.push({
			date: Entry.date.getTime(),
			items: Entry.items,
			calTotal: Entry.calTotal,
			exercise: Entry.exercise,
			calBurned: Entry.calBurned,
			calcTotals: Entry.calcTotals.toString(),
			deleteItem: Entry.deleteItem.toString(),
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
		log.forEach((Entry) => {
			Entry.calcTotals = new Function("return " + Entry.calcTotals)();
			Entry.deleteItem = new Function("return " + Entry.deleteItem)();
			Entry.date = new Date(parseInt(Entry.date));
		});
		return log;
	} else {
		return [];
	}
}

// Add a test Entry in order to test pagination
function addTestEntry() {
	// Get current date
	const today = new Date();
	// Create tomorrow date
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	// Create test Entry data
	const item = {
		food: "apple",
		calories: 35,
		amount: 1,
	};
	const exercise = false;
	const calBurned = 0;
	// Create test entries and push them to the log
	calLog.push(new Entry(today, item, exercise, calBurned));
	calLog.push(new Entry(tomorrow, item, exercise, calBurned));

	// Populate second Entry with 4 more items
	let tomorrowLog = findLog(tomorrow);
	if (tomorrowLog) {
		for (let i = 0; i < 4; i++) {
			tomorrowLog.items.push(item);
		}
	}
	// Calculate the totals for each Entry
	calLog.forEach((Entry) => {
		Entry.calcTotals();
	});

	// Display the log and save it
	displayLogBook(findLog(today));
	saveLog();
}

// Initialize the log book
function initLog() {
	// Get the current date
	const date = new Date();

	// If load log returns an array, display the log book
	// else, display the current date
	if (calLog.length > 0) {
		displayLogBook(findLog(date));
		calLog.forEach((Entry) => {
			Entry.calcTotals();
		});
	} else {
		displayDate(date);
		addTestEntry();
	}
}

initLog();

export { calLog, Entry, findLog, saveLog, loadLog };
