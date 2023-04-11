import { MY_DATA } from "./data.js";

function saveTripData() {
	localStorage.setItem("tripdata", JSON.stringify(MY_DATA));
}

function getTripData() {
	const tripDataJSON = localStorage.getItem("tripdata");
	if (tripDataJSON != null) {
		return JSON.parse(tripDataJSON);
	} else {
		return [];
	}
}

export { saveTripData, getTripData };
