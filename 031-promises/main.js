// Creates a promise that resolves into a weather condition
// function getWeather() {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			resolve("Rainy");
// 		}, 100);
// 	});
// }

// // Takes a weather condition and creates a promise that resolves into an emoji
// function getWeatherIcon(weather) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			switch (weather) {
// 				case "Sunny":
// 					resolve("☀️");
// 					break;
// 				case "Cloudy":
// 					resolve("☁️");
// 					break;
// 				case "Rainy":
// 					resolve("🌧");
// 					break;
// 				default:
// 					reject("Unknown weather type");
// 			}
// 		}, 100);
// 	});
// }

// // checks if the promise was resolved or rejected
// function onSuccess(data) {
// 	console.log(`Success: ${data}`);
// }
// function onError(data) {
// 	console.log(`Error: ${data}`);
// }

// // promise chain
// getWeather().then(getWeatherIcon).then(onSuccess).catch(onError);

// function fun1() {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			reject("404");
// 		}, 100);
// 	});
// }

// function fun2() {
//     console.log("fun2");
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			resolve("🧔");
// 		}, 100);
// 	});
// }

// function onSuccess(data) {
// 	console.log(data);
// }
// function onError(errorCode) {
// 	console.log(`Error: ${errorCode}`);
// }

// function onFinally() {
//     console.log("Finally we be done yo");
// }

// fun1().then(fun2).then(onSuccess).catch(onError).finally(onFinally);

//.catch() is a global error handler for the chain
//passing in the error handling function to the .then() method is a local error handler for that promise

function fetchData() {
    return new Promise(function (resolve, reject) {
        // This should be the right code for Fresno
        // Edit: Okay I know this is the right code because before typing the word Fresno,
        // github copilot was able to recognize the link and fill in the word Fresno for me, just by
        // seing the forecast office code and coordinates I guess haha. Wild.
        fetch('https://api.weather.gov/gridpoints/HNX/36,119/forecast') 
        .then(response => response.json())
        .then(data => resolve(data.properties.periods[1].shortForecast))
    });
}

function displayData(weather) {
    console.log(weather);
}

function onError(error) {
    console.log(`ERR: ${error}`);
}

fetchData().then(displayData).catch(onError);