let pizza;

function orderPizza() {
	console.log("Ordering pizza...");
    setTimeout(() => {
        pizza = "🍕";
    }, 2000);
	console.log("Pizza ordered!");
}

orderPizza();
console.log(`Eat ${pizza}`);
