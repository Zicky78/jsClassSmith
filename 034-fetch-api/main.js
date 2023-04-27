import { newsAPI, spotifyAPI } from "./api-key.js";

let newsAPIKey = newsAPI.KEY;
let spotifyAPIKey = spotifyAPI.KEY;

// const url = "http://worldtimeapi.org/api/timezone/America/New_York";
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + newsAPIKey;

async function getData() {
	const response = await fetch(url);
	console.log(response);
	const data = await response.json();
    data.articles.forEach(article => {
        console.log(article.title);
    });
}

getData();


