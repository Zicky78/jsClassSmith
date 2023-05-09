let stringArr = ["one", "hey", "Zach"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

// guitars = stringArr;
// mixedData = guitars;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Zach", 24, true];

let mixed = ["John", 1, false];

mixed = myTuple;

// myTuple = mixed;

myTuple[1] = 42;

// Objects

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
	prop1: "Zach",
	prop2: true,
};

type Guitarist = {
	name: string;
	active: boolean;
	albums: (string | number)[];
};

let evh: Guitarist = {
	name: "Eddie Van Halen",
	active: true,
	albums: ["OU812", 1984, 5150],
};

let jp: Guitarist = {
	name: "Jimmy",
	active: true,
	albums: ["I", "II", "IV"],
};

evh = jp;

