/*
* Conditionals, Functions, Scope and Loops
 */

// Equals
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than or equal to
let greaterThanEq = 5 >= 5;

// Less than or equal to
let lessThanEq = 4 <= 9;

// Not equals
let notEquals = 5 !== 2;

//let storeA = 4.40;
//let storeB = 4.40;



//console.log(storeAIsLower);

function compareStorePrices (storeA, storeB) {

	let storeAIsLower = storeA < storeB;
	let storeBIsLower = storeB < storeA;

	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeBIsLower) {
		console.log("Store B has a lower price.")
	} else {
		console.log("The prices are equal.")
	}

}

compareStorePrices(10,5);
compareStorePrices(7, 10);

function squareNum (number) {
	return number * number;
}

let square = squareNum(4);

console.log(square);

let x = 10;

function addNumbers (n, m, x) {
	console.log(x);
	let b;
	if (1===1) {
		let b = 8;
		console.log(b)
	};

	return n + m;
};

addNumbers(2, 3, 10);

let ourArray = [1, 2, 3, 4, 5, ['a', 'b', 'c']];

console.log(ourArray[0]);
console.log(ourArray[5] [2]);

ourArray[1];
ourArray[2];
ourArray[3];

for(i = 0; i < ourArray.length; i++) {
	console.log("i is equal to " + i);
	console.log(ourArray[i]);
	for(j = 0; j < 5; j++) {
		console.log("j is equal to " + j);
	}
}

let d = 5;
while(d < 10) {
	console.log("d is " + d);
	d++;
}



