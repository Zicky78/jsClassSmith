const tripTracker = {
	tripHistory: { MPG: [], tripCost: [] },
	tripForm: document.getElementById('form-input'),
	tripError: document.getElementById('err'),
	tripOutput: document.getElementById('output'),
	tripAvgOutput: document.getElementById('avg-output'),
	update: function(outputSrc, input) {
		let output = document.createElement('h3')
		output.textContent = input
		outputSrc.appendChild(output)
	},
	addTripHistory: function(MPG, tripCost) {
		this.tripHistory.MPG.push(MPG)
		this.tripHistory.tripCost.push(tripCost)
		this.update(this.tripOutput, `#${tripTracker.tripHistory.MPG.length}: MPG: ${MPG.toFixed(2)} | Trip Cost: $${tripCost.toFixed(2)}`)
	},
	calcTrip: function(miles, gallons, price) {
		let MPG = miles / gallons
		let tripCost = gallons * price
		this.addTripHistory(MPG, tripCost)
	},
	calcAvg: function() {
		let avgMPG = this.tripHistory.MPG.reduce((sum, MPG) => sum + MPG) / this.tripHistory.MPG.length
		let avgTripCost = this.tripHistory.tripCost.reduce((sum, tripCost) => sum + tripCost) / this.tripHistory.tripCost.length
		this.tripAvgOutput.textContent = ""
		this.update(this.tripAvgOutput, `Average MPG: ${avgMPG.toFixed(2)} | Average Trip Cost: $${avgTripCost.toFixed(2)}`)
	}
}

tripTracker.tripForm.addEventListener('submit', (e) => {
	e.preventDefault()
	tripTracker.tripError.textContent = ""
	if (e.target.miles.value == 0 || e.target.gallons.value == 0 || e.target.price.value == 0) {
		tripTracker.update(tripTracker.tripError, `Enter a value greater than 0`)
	}
	else {
		tripTracker.calcTrip(e.target.miles.value, e.target.gallons.value, e.target.price.value)
		tripTracker.calcAvg()
	}
})

// Documentation / Explanation (comments add to the line total after all):

// 40 lines. I'd say readability is decent, though some lines are long
// I also didn't change any html, and I could have probably saved some lines if I did

// I wanted to have no global variables, so that everything was contained to the object except the event listener

// I changed the output function to accept an output source so that i could reuse it 
// Adding all the output targets individually cost me some lines, but storing them in an 
// object on one line like I did for tripHistory would have been a little silly

// If there are no errors, CalcTrip calculates MPG and TripCost, and calls addTripHistory

// addTripHistory pushes the MPG and TripCost to their respective arrays, then calls
// update to display those

// calcAvg then uses the reduce method to sum both arrays, then divide them by their length to get the average
// Next it clears the avg-output and then calls update to re-display the averages with the updated info



