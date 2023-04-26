const formEL = document.getElementById("form");
const outputEL = document.getElementById("output");

formEL.addEventListener("submit", (e) => {
	e.preventDefault();
	let type = e.target.type.value;
	let reps = parseFloat(e.target.reps.value);
	let time = parseFloat(e.target.time.value);
	startWorkout(type, reps, time).then().catch((err) => {
		console.log(err);
	});
	formEL.reset();
});

function updateDOM(content, element) {
	let workout = document.createElement(element);
	workout.textContent = content;
	outputEL.appendChild(workout);
	return workout;
}

function startWorkout(type, reps, time) {
	let workout = updateDOM(`Starting ${type} for ${reps} reps`, "p");
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			workout.textContent = `Finished ${type}`;
			resolve(workout);
		}, time * 60000);
	});
}
