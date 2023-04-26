// async function start() {
// 	const data = await fetch('https://api.weather.gov/gridpoints/HNX/53,100/forecast');
//     const result = await data.json();
// 	console.log(result.properties.periods[0].shortForecast);
// }

// async function start2() {
// 	fetch('https://api.weather.gov/gridpoints/HNX/53,100/forecast')
//     .then(data => data.json())
//     .then(result =>
// 	console.log(result.properties.periods[0].shortForecast));
// }

// start();
// start2();

// 1. Async and Await must be used together
// 2. Async and Await are just syntactic sugar for promises (copilot suggested this one)
// 3. Async / Await only affects promise receiver
// 4. You can await any function that returns a promise
// 5. Async functions always return a promise
// 6. Any function can be converted to async
// 7. Error handling with try and catch

function getData() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			reject("Something went wrong");
		}, 1000);
	});
}

async function start() {
	try {
		const result = await getData();
        onSuccess(result);
	} catch (error) {
        onFailure();
	}
}

async function start2() {
	const result = await getData().catch((error) =>
		console.log(`Error: ${error}`)
	);
    console.log(result)
}

function onSuccess(data) {
    console.log(`Success: ${data}`);
}

function onFailure(){
    console.log("Failure");
}

start();
start2();
