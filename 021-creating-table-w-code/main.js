function updateDOM(input, id){
	const divEL = document.getElementById(id);
	const h3 = document.createElement('h3');
	h3.textContent = input;
	divEL.appendChild(h3);
};

const MY_DATA = []
const FORM_EL = document.getElementById('form-input')
const TBL_OUTPUT = document.getElementById('table-out')

function calcAvg() {
	let avgMPG = MY_DATA.reduce((sum, MY_DATA) => sum + MY_DATA.MPG, 0) / MY_DATA.length
	let avgTripCost = MY_DATA.reduce((sum, MY_DATA) => sum + MY_DATA.tripCost, 0) / MY_DATA.length
	updateDOM(`Average MPG: ${avgMPG.toFixed(2)} | Average Trip Cost: $${avgTripCost.toFixed(2)}`, 'avg-output')
}

function validateForm(miles, gallons, price) {
	document.getElementById('err').innerHTML = ''
	const errMsg = []
	if(miles <= 0 || gallons <= 0 || price <= 0) {
		errMsg.push('Please enter a value greater than 0. ')
	}
	if(price > 1000) {
		errMsg.push(`Paying more than $1000/gal for gas is the real error here. Just bike at that point.`)
	}
	if(errMsg.length > 0) {
		updateDOM(errMsg, 'err')
	} else {
		return true 
	}
}

function renderTable() {
	const tbl = document.createElement('table')
	const headings = ['Miles Driven', 'Gallons Used', 'Price Paid', 'Trip MPG', 'Trip Cost', 'Edit/Delete']
	const tr = document.createElement('tr')
	headings.forEach((heading) => {
		let th = document.createElement('th')
		th.textContent = heading
		tr.appendChild(th)
	})
	tbl.appendChild(tr)
	TBL_OUTPUT.appendChild(tbl)
}

function populateTableData() {
	let tbl = document.querySelector('table')
	MY_DATA.forEach((entry) => {
		let tr = document.createElement('tr')
		for(key in entry) {
			let td = document.createElement('td')
			td.textContent = entry[key]
			tr.appendChild(td)
		}
		tbl.appendChild(tr)
	})
}

FORM_EL.addEventListener('submit', (e) => {
	e.preventDefault()
	let miles = e.target.miles.value
	let gallons = e.target.gallons.value
	let price = e.target.price.value
	const isValid = validateForm(miles, gallons, price)
	if(isValid) {
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
			TBL_OUTPUT.innerHTML = ''
			renderTable()
			populateTableData()
			calcAvg()
	}
})