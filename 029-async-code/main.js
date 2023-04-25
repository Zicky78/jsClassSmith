// let pizza;

// function orderPizza() {
// 	console.log("Ordering pizza...");
//     setTimeout(() => {
//         pizza = "🍕";
//         console.log(`Your ${pizza} is ready!`);
//     }, 2000);
// 	console.log(`${pizza} ordered!`);
// }

// orderPizza();
// console.log('Call Qoli')
// console.log(`Eat ${pizza}`);

function orderPizza(callback) {
	setTimeout(() => {
		const pizza = "🍕";
		callback(pizza);
	}, 2000);
}

function pizzaReady(pizza) {
	console.log(`Your ${pizza} is ready!`);
	console.log(`Eat ${pizza}`);
}

orderPizza(pizzaReady);
console.log("Call Qoli");

window.addEventListener("click", callback);

function callback() {
	console.log("Clicked!");
}

function thing1(callback) {
	//call pizza shop
	callback(thing2);
}

function thing2(callback) {
	//order pizza
	callback(thing3);
}

function thing3() {
	//eat pizza
}

thing1(() => {
	thing2(() => {
		thing3();
	});
});

