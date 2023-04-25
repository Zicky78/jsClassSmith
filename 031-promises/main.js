// Creates a promise that resolves into a weather condition
function getWeather() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("Rainy");
		}, 100);
	});
}

// Takes a weather condition and creates a promise that resolves into an emoji
function getWeatherIcon(weather) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			switch (weather) {
				case "Sunny":
					resolve("☀️");
					break;
				case "Cloudy":
					resolve("☁️");
					break;
				case "Rainy":
					resolve("🌧");
					break;
                default:
                    reject("Unknown weather type");
			}
		}, 100);
	});
}

// checks if the promise was resolved or rejected
function onSuccess(data) {
	console.log(`Success: ${data}`);
}
function onError(data) {
	console.log(`Error: ${data}`);
}

// promise chain
getWeather().then(getWeatherIcon).then(onSuccess, onError);
