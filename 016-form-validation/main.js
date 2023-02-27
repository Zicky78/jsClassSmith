const updateDOM = (input) => {
	const divEL = document.querySelector('#output');
	const h2 = document.createElement('h2');
	h2.textContent = input;
	h2.style.color = '#25A341';
	divEL.appendChild(h2);
};

const MY_MPG = [];
const MY_TRIP_COST = [];

const FORM_EL = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUT = document.getElementById('avg-output')

const trackMPGandCost = (miles, gallons, price = 3.79) => {
	const MPG = miles / gallons;
	const tripCost = gallons * price;
	MY_MPG.push(MPG);
	MY_TRIP_COST.push(tripCost);
	return `MPG: ${MPG.toFixed(2)} \n Trip Cost: $${tripCost.toFixed(2)}`;
};

const calculateAvgMPG = () => {
	let totalMPG = 0;
	for (let i = 0; i < MY_MPG.length; i++) {
		totalMPG += MY_MPG[i];
	}

	let avgMPG = totalMPG / MY_MPG.length;
	updateDOM(`Average MPG is: ${avgMPG.toFixed(2)}`);
};

const calculateAvgCost = () => {
	let totalCost = 0;
	for (let i = 0; i < MY_TRIP_COST.length; i++) {
		totalCost += MY_TRIP_COST[i];
	}

	let avgCost = totalCost / MY_TRIP_COST.length;
	updateDOM(`Average Cost is: $${avgCost.toFixed(2)}`);
};

const calculateSum = (arr) => {
	let sum = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	sum += arr[i];
	// }
	// arr.forEach((element) => {
	// 	sum += element;
	// });
	for (value of arr) {
		sum += value;
	}
	return sum;
};

const calculateAvg = () => {
	let sumMPG = calculateSum(MY_MPG);
	let sumTripCost = calculateSum(MY_TRIP_COST);

	let avgMPG = sumMPG / MY_MPG.length;
	let avgTripCost = sumTripCost / MY_TRIP_COST.length;

	return `<h2>Average MPG is ${avgMPG.toFixed(2)}</h2><br><h2>Average Trip Cost is $${avgTripCost.toFixed(2)}</h2>`;
};

// updateDOM(trackMPGandCost(300, 10, 5.4));
// updateDOM(trackMPGandCost(320, 20, 3.2));
// updateDOM(trackMPGandCost(100, 7, 4.4));
// updateDOM(trackMPGandCost(600, 24, 5.7));
// updateDOM(trackMPGandCost(50, 2, 3.4));
// updateDOM(trackMPGandCost(320, 20, 3.2));
// updateDOM(trackMPGandCost(320, 12, 5.0));

// calculateAvgMPG();
// calculateAvgCost();

// calculateAvg();

// const newLoops = () => {
// 	// Do...while is good for things you want to happen, but want to restart if the result isn't right
// 	// This is how profressionals do password management right?
// 	let input = '';
// 	let password = 'password';
// 	do {
// 		// input = prompt('Enter the password');
//         input = password 
// 	} while (input != password);

// 	// While
// 	let i = 0;
// 	while (i < 5) {
// 		document.querySelectorAll('h2').forEach((h2) => {
// 			h2.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// 		});
// 		i++;
// 	}

// 	Inception: while (true) {
// 		while (true) {
// 			while (true) {
// 				while (true) {
// 					while (true) {
// 						while (true) {
// 							while (true) {
// 								while (true) {
// 									console.log('Inception was a cool movie');
// 									break Inception;
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// };

// newLoops();

FORM_EL.addEventListener('submit', (e) => {
	e.preventDefault()
	const errMsg = []
	let miles = parseInt(e.target.miles.value)
	let gallons = parseInt(e.target.gallons.value)
	let price = parseInt(e.target.price.value)
	if(miles === 0 || gallons === 0 || price === 0) {
		errMsg.push('Values must be greater than zero! Try again!')
	}

	if(price > 1000) {
		errMsg.push("Back in my day, gas was only $7 / gallon. Try again!")
	}
	
	if(errMsg.length > 0) {
		ERR.textContent = errMsg 
	} else {
		ERR.textContent = '' // Clear the error message
		updateDOM(trackMPGandCost(miles, gallons, price))
	}

	AVG_OUT.innerHTML = calculateAvg() //Output avg outside of form
	
})


