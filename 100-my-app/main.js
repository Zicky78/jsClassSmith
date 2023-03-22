// Update DOM
function updateDOM(input, id) {
	const divEL = document.getElementById(id);
	const h3 = document.createElement("h3");
	h3.textContent = input;
	divEL.appendChild(h3);
}

// Inputs
const dayOfWeek = 4; // 1 = Monday, 7 = Sunday
const cheatDay = false;
const rememberedLunch = true;
const tired = true;

// Conditions
let makingDinner = dayOfWeek > 4;
let working = dayOfWeek < 4;

// Tracks daily calorie intake
let calories = 0;

// Print inputs
updateDOM(`Day of Week: ${dayOfWeek}`, "output");
updateDOM(`Cheat Day: ${cheatDay}`, "output");
updateDOM(`Remembered Lunch: ${rememberedLunch}`, "output");
updateDOM(`Am I making dinner tonight?: ${makingDinner}`, "output");
updateDOM(`Am I too tired to cook a big meal?: ${tired}`, "output");
updateDOM(`Am I working today?: ${working}`, "output");

// Decision Logic

// Working means less time to cook breakfast
// Working also means that I really only get a chance to eat a small snack during lunch
// Doesn't bother me though, since I usually only eat something small or forget to eat lunch entirely
if (working) {
	updateDOM(
		`Breakfast: Not as much time. Yogurt, Fruit, and Walnuts!`,
		"output"
	);
	updateDOM(
		`Lunch: Working hard or hardly working? Have some pistachios or a weight-loss snack bar on your break.`,
		"output"
	);
	calories += 102 + 35 + 185 + 95;
} else {
	updateDOM(
		`Breakfast: Low-Carb Toast, Scrambled Eggs with Cheese, and Bacon. Though I don't know if it's still "breakfast" past noon`,
		"output"
	);
	calories += 5 + 215 + 164;
	if (rememberedLunch) {
		updateDOM(
			`Lunch: Leftovers from the fridge, a quick sandwich, or a salad`,
			"output"
		);
		calories += Math.random() * (300 - 150) + 150;
	} else {
		updateDOM(
			`Lunch?: Oh hey it's 4pm and you're now hungry but it's too late to make lunch and too early to make dinner`,
			"output"
		);
		calories += 0;
	}
}

// If it's a cheat day, logic needn't apply (in code and out). I'm getting whatever I'm craving at the time. Right now being
// Chinese take-out and this incredible lavender poppy gelato I found at Sprouts
// I only make dinner on the weekends when my mom works, otherwise just eating what she makes
// I'm not the most experienced cook though, so if I'm tired at night I opt making simpler meals
if (!cheatDay) {
	if (!makingDinner) {
		updateDOM(`Dinner: Nothing like a home cooked meal from mom!`, "output");
		calories += Math.random() * (600 - 350) + 350;
	} else if (!tired) {
		updateDOM(
			`Dinner: Salmon and Roasted Asparagus. Need to get better making salmon though...`,
			"output"
		);
		calories += 236 + 50;
	} else {
		updateDOM(
			`Dinner: Chicken Stir Fry and Cauliflower Rice. Quick and easy.`,
			"output"
		);
		calories += 226 + 25;
	}
} else {
	updateDOM(
		`Dinner: Take-out chinese for dinner! Rice, Noodles, Crab Rangoons, and more. All the delicious carbs you've been missing`,
		"output"
	);
	calories += 1000000; //one-million
}

// Thursdays are when my favorite show airs, and the cheat day will influence the sugar content of my ice cream
if (dayOfWeek === 4 && !cheatDay) {
	updateDOM(
		`Watching my favorite show and eating keto-firendly ice cream. It's not the real thing, but it'll do`,
		"output"
	);
	calories += 360;
} else if (dayOfWeek === 4) {
	updateDOM(
		`Watching my favorite show and eating lavender poppy seed ice cream.`,
		"output"
	);
	calories += 615;
}

// Output the totaled calories
updateDOM(`Calorie Intake: ${Math.floor(calories)}`, "output");
