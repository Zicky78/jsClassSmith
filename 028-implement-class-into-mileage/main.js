import { MY_DATA, calcAvg, TripData } from "./data.js";
import { renderTable, updateDOM } from "./render.js";
import { saveTripData } from "./storage.js";

const FORM_EL = document.getElementById("form-input");

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
	let miles = parseFloat(e.target.miles.value);
	let gallons = parseFloat(e.target.gallons.value);
	let price = parseFloat(e.target.price.value);
	const isValid = validateForm(miles, gallons, price);
	if (isValid) {
		MY_DATA.push(new TripData(miles, gallons, price)); // looks much cleaner this way I think
		renderTable();
		calcAvg();
		saveTripData();
		FORM_EL.reset();
	}
});