import { getTripData } from "./storage.js";
import { renderTable, updateDOM } from "./render.js";

const MY_DATA = getTripData();

// New class
class TripData {
	constructor(miles, gallons, price) {
		this.miles = miles
		this.gallons = gallons
		this.price = price
		this.MPG = Number((miles / gallons).toFixed(2))
		this.tripCost = Number((gallons * price).toFixed(2))
	}
}

if (MY_DATA != null) {
	renderTable();
	calcAvg();
}

function calcAvg() {
	document.getElementById("avg-output").innerHTML = "";
	if (MY_DATA.length !== 0) {
		let sums = MY_DATA.reduce(function(sum, obj) {
			return {
				MPG: sum.MPG + obj.MPG,
				tripCost: sum.tripCost + obj.tripCost
			}
		})
		let avgMPG = sums.MPG / MY_DATA.length
		let avgTripCost = sums.tripCost / MY_DATA.length
		updateDOM(
			`Average MPG: ${avgMPG.toFixed(
				2
			)} | Average Trip Cost: $${avgTripCost.toFixed(2)}`,
			"avg-output"
		);
	}
}

export { MY_DATA, calcAvg, TripData };
