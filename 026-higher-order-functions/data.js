import { getTripData } from "./storage.js";
import { renderTable, updateDOM } from "./render.js";

const MY_DATA = getTripData();

if (MY_DATA != null) {
	renderTable();
	calcAvg();
}

function calcAvg() {
	document.getElementById("avg-output").innerHTML = "";
	if (MY_DATA.length !== 0) {
		/*
		let avgMPG =
			MY_DATA.reduce((sum, MY_DATA) => sum + MY_DATA.MPG, 0) / MY_DATA.length;
		let avgTripCost =
			MY_DATA.reduce((sum, MY_DATA) => sum + MY_DATA.tripCost, 0) /
			MY_DATA.length;
		*/
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

export { MY_DATA, calcAvg };
