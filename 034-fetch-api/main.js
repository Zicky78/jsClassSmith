import { newsAPI, spotifyAPI } from "./api-key.js";

let newsAPIKey = newsAPI.KEY;
let spotifyAPIKey = spotifyAPI.KEY;

const url = "http://worldtimeapi.org/api/timezone/America/New_York";

async function getData() {
	const response = await fetch(url);
	console.log(response);
	const data = await response.json();
	console.log(data);
}

getData();
