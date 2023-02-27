const FORM_EL = document.getElementById('form-input')

const updateDOM = (input) => {
	const divEL = document.querySelector('#output');
	const h2 = document.createElement('h2');
	h2.textContent = input;
	h2.style.color = '#25A341';
	divEL.appendChild(h2);
};

const trackAcceleration = (initialV, finalV, startTime = 0, endTime) => {
    const acc = (finalV-initialV)/(endTime-startTime)
    return acc.toFixed(2)
    
}

FORM_EL.addEventListener('submit', (e) => {
	e.preventDefault()
	let initialV = e.target.initialV.value
	let finalV = e.target.finalV.value
	let startTime = e.target.startTime.value
	let endTime = e.target.endTime.value
	updateDOM(`${trackAcceleration(initialV, finalV, startTime, endTime)} m/s\u{00B2}`)
})

