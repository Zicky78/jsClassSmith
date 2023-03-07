const updateDOM = (input, id) => {
	const divEL = document.getElementById(id);
	const h3 = document.createElement('h3');
	h3.textContent = input;
	divEL.appendChild(h3);
};

const MY_DATA = []
const FORM_EL = document.getElementById('form-input')

function calcAvg() {
	let avgMPG = MY_DATA.reduce((sum, MY_DATA) => sum + MY_DATA.MPG, 0) / MY_DATA.length
	let avgTripCost = MY_DATA.reduce((sum, MY_DATA) => sum + MY_DATA.tripCost, 0) / MY_DATA.length
	updateDOM(`Average MPG: ${avgMPG.toFixed(2)} | Average Trip Cost: $${avgTripCost.toFixed(2)}`, 'avg-output')
}

FORM_EL.addEventListener('submit', (e) => {
	e.preventDefault()
	document.getElementById('err').innerHTML = ''
	if (e.target.miles.value == 0 || e.target.gallons.value == 0 || e.target.price.value == 0) {
		updateDOM('Enter a value greater than 0', 'err')
	}
	else {
		let miles = e.target.miles.value
		let gallons = e.target.gallons.value
		let price = e.target.price.value
		MY_DATA.push(
			{
				miles: miles,
				gallons: gallons,
				price: price,
				MPG: miles/gallons,
				tripCost: gallons*price,
			})
			updateDOM(`#${MY_DATA.length} - MPG: ${MY_DATA[MY_DATA.length - 1].MPG.toFixed(2)} | Trip Cost: $${MY_DATA[MY_DATA.length - 1].tripCost.toFixed(2)}`, 'output')
			document.getElementById('avg-output').innerHTML = ''
			calcAvg()
	}
})

// Documentation / Explanation:

// 39 LINES!!! One fewer than last time!

// I thought it would be easier to refactor my previous refactor, since there 
// was a lot less to do for it. Hope that's okay

// My output statement grows ever-longer though...
// Once the data is pushed into the array, I use MY_DATA[MY_DATA.length - 1] to access the newly created object

// I ran into some problems when using reduce on an array of objects. Apparently it's
// best practice to provide an initial value, because the accumulator began as a number literal,
// which didn't contain the properties MPG and tripCost. Setting an initial value for it lets
// the accumulator keep the properties of the object that I'm using it with.
// At least that's the understanding I got after reading through like 6 different posts on stack overflow...

// I was also hoping this would work and save me 3 lines storing them as variables:

/* MY_DATA.push(
	{
		miles: e.target.miles.value,
		gallons: e.target.gallons.value,
		price: e.target.price.value,
		MPG: this.miles/this.gallons,
		tripCost: this.gallons*this.price,
	}) */

// Overall I think this is my favorite implementation of this program so far

