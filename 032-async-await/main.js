async function start() {
	const data = await fetch('https://api.weather.gov/gridpoints/HNX/53,100/forecast');
    const result = await data.json();
	console.log(result.properties.periods[0].shortForecast);
}

async function start2() {
	fetch('https://api.weather.gov/gridpoints/HNX/53,100/forecast')
    .then(data => data.json())
    .then(result => 
	console.log(result.properties.periods[0].shortForecast));
}

start();
start2();
