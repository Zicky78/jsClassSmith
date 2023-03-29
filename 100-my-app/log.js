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

// Calorie logbook holding all of the entries
const calLog = [];

// Constructor to make new entries. this.items becomes an array holding the items object that is passed in
class entry {
	constructor(date, items, exercise, calBurned) {
		this.date = date;
		this.items = [items];
		this.calTotal = 0;
		this.exercise = exercise;
		this.calBurned = calBurned;
	}
}

// Loop through each entry
function calcTotal() {
	calLog.forEach((entry) => {
		// Reset the calTotal for the entry
		entry.calTotal = 0;
		entry.items.forEach((item) => {
			// Sum the calories of each of the items in the entry
			entry.calTotal += item.calories * item.amount;
		});
		console.log(entry.calTotal);
	});
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

export { calLog, entry, calcTotal, findLog };
