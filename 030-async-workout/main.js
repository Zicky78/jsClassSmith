const formEL = document.getElementById("form");
const outputEL = document.getElementById("output");

formEL.addEventListener("submit", (e) => {
	e.preventDefault();
	let type = e.target.type.value;
	let reps = parseFloat(e.target.reps.value);
	let time = parseFloat(e.target.time.value);
	startWorkout(type, reps, time, startTimer);
	formEL.reset();
});

function startWorkout(type, reps, time, callback) {
	let workout = document.createElement("p");
	workout.textContent = `Starting ${type} for ${reps} reps`;
	outputEL.appendChild(workout);
	callback(workout, type, time);
}

function startTimer(workout, type, time) {
	setTimeout(() => {
		workout.textContent = `Finished ${type}`;
	}, time * 60000);
}


// startWorkout does the first DOM update and calls startTimer
// startTimer does the second DOM update after a delay. It is passed a reference to the created element so it can update it
// startTimer is passed as a callback to startWorkout
// startWorkout is passed as a callback to addEventListener