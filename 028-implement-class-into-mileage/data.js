import { getTripData } from "./storage.js";
import { renderTable, updateDOM } from "./render.js";

const MY_DATA = getTripData();

// New class
class TripData {
	constructor(miles, gallons, price) {
		this._miles = miles;
		this._gallons = gallons;
		this._price = price;
		this._MPG = Number((miles / gallons).toFixed(2));
		this._tripCost = Number((gallons * price).toFixed(2));
	}
	
}

if (MY_DATA != null) {
	renderTable();
	calcAvg();
}

function calcAvg() {
	document.getElementById("avg-output").innerHTML = "";
	if (MY_DATA.length !== 0) {
		let sums = MY_DATA.reduce(function (sum, obj) {
			return {
				_MPG: sum._MPG + obj._MPG,
				_tripCost: sum._tripCost + obj._tripCost,
			};
		});
		let avgMPG = sums._MPG / MY_DATA.length;
		let avgTripCost = sums._tripCost / MY_DATA.length;
		updateDOM(
			`Average MPG: ${avgMPG.toFixed(
				2
			)} | Average Trip Cost: $${avgTripCost.toFixed(2)}`,
			"avg-output"
		);
	}
}

export { MY_DATA, calcAvg, TripData };
