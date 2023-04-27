import { newsAPI, spotifyAPI } from "./api-key.js";

let newsAPIKey = newsAPI.KEY;
let spotifyAPIKey = spotifyAPI.KEY;

// const url = "http://worldtimeapi.org/api/timezone/America/New_York";
// const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + newsAPIKey;
const url = "https://api.spotify.com/v1/artists/5WmX340gDNLIAyUcg4MzWN";

// async function getData() {
// 	const request = new Request(url, {
// 		headers: {
// 			Authorization: "Bearer " + spotifyAPIKey,
// 		},
// 	});
// 	const response = await fetch(request);
// 	console.log(response);
// 	const data = await response.json();
// 	console.log(data);
// }

// getData();

// Even though the request is bad, it still returns the correct response from the API,
// even when the other block of code is commented out. I tested it with the search endpoint too
// and it still works. I'm not sure why it's letting me use the API without a valid key.

// Edit: Nevermind, new searches don't work. Spotify must cache responses on the client-side then.
// Refreshing cache and hard reload fixed it

const badRequest = new Request(url, {
	headers: {
		Authorization: "Bearer " + "Not a real key",
	},
});

async function getData() {
	try {
		const response = await fetch(badRequest);
        const data = await response.json();
        if(response.status === 200) {
            console.log("Success", data);
        } else {
            console.log("Server Error:", data.error.message);
        }
	} catch (error) {
        console.log("Fetch Error:", error);
    }
}

getData();

// fetch(badRequest)
// 	.then((response) => response.json())
// 	.then((data) => console.log("Success", data))
// 	.catch((error) => console.log("Error"));
