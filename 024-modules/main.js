import { renderTable } from "./render.js";

function updateDOM(input, id) {
	const divEL = document.getElementById(id);
	const h3 = document.createElement("h3");
	h3.textContent = input;
	divEL.appendChild(h3);
}

const FORM_EL = document.getElementById("form-input");

function getTripData() {
	const tripDataJSON = localStorage.getItem("tripdata");
	if (tripDataJSON != null) {
		return JSON.parse(tripDataJSON);
	} else {
		return [];
	}
}

function saveTripData() {
	localStorage.setItem("tripdata", JSON.stringify(MY_DATA));
}

const MY_DATA = getTripData();

if (MY_DATA != []) {
	renderTable(MY_DATA);
	calcAvg();
}

function calcAvg() {
	document.getElementById("avg-output").innerHTML = "";
	if (MY_DATA.length !== 0) {
		let avgMPG =
			MY_DATA.reduce((sum, MY_DATA) => sum + MY_DATA.MPG, 0) / MY_DATA.length;
		let avgTripCost =
			MY_DATA.reduce((sum, MY_DATA) => sum + MY_DATA.tripCost, 0) /
			MY_DATA.length;
		updateDOM(
			`Average MPG: ${avgMPG.toFixed(
				2
			)} | Average Trip Cost: $${avgTripCost.toFixed(2)}`,
			"avg-output"
		);
	}
}

function validateForm(miles, gallons, price) {
	document.getElementById("err").innerHTML = "";
	const errMsg = [];
	if (miles <= 0 || gallons <= 0 || price <= 0) {
		errMsg.push("Please enter a value greater than 0. ");
	}
	if (price > 1000) {
		errMsg.push(
			`Paying more than $1000/gal for gas is the real error here. Just bike at that point.`
		);
	}
	if (errMsg.length > 0) {
		updateDOM(errMsg, "err");
	} else {
		return true;
	}
}

FORM_EL.addEventListener("submit", (e) => {
	e.preventDefault();
	let miles = e.target.miles.value;
	let gallons = e.target.gallons.value;
	let price = e.target.price.value;
	const isValid = validateForm(miles, gallons, price);
	if (isValid) {
		MY_DATA.push({
			miles: miles,
			gallons: gallons,
			price: price,
			MPG: miles / gallons,
			tripCost: gallons * price,
		});
		renderTable(MY_DATA);
		calcAvg();
		saveTripData();
	}
});
