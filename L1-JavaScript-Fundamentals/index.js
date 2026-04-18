// Module 3 - JavaScript Fundamentals

// Exercise 1

"" + 1 + 0; // Adding "" to 1 and 0 results in "10"
console.log("" + 1 + 0);
"" - 1 + 0; // Subtracting 1 from "" results in -1, and adding 0 keeps it -1
console.log("" - 1 + 0);
true + false; // True results in 1, false results in 0, and the final result is 1
console.log(true + false);
!true; // ! serves as the NOT operator and converts true to false
console.log(!true);
6 / "3"; // Dividing 6 by "3" results in 2
console.log(6 / "3");
"2" * "3"; // Multiplying "2" by "3" results in 6
console.log("2" * "3");
4 + 5 + "px"; // Adding 4 and 5 results in 9, and adding "px" results in "9px"
console.log(4 + 5 + "px");
"$" + 4 + 5; // Adding "$" with 4 and 5 results in "$45"
console.log("$" + 4 + 5);
"4" - 2; // Subtracting 2 from "4" results in 2
console.log("4" - 2);
"4px" - 2; // Subtracting 2 from "4px" results in NaN
console.log("4px" - 2);
"  -9  " + 5; // Adding "  -9  " with 5 results in  "  -9  5"
console.log("  -9  " + 5);
"  -9  " - 5; // Subtracting 5 from "  -9  " results in -14
console.log("  -9  " - 5);
null + 1; // Adding null and 1 results in 1
console.log(null + 1);
undefined + 1; // Adding undefined with 1 results in NaN
console.log(undefined + 1);
undefined == null; // Placing double equal symbols in value but not type results in true
console.log(undefined == null);
undefined === null; // Placing triple equal symbols in value and type results in false
console.log(undefined === null);
" \t \n" - 2; // Subtracting 2 from " \t \n" results in -2
console.log(" \t \n" - 2);

// Exercise 2

let three = "3";
let four = "4";
let thirty = "30";

// What is the value of the following expressions?
let addition = three + four; // Adding "three" and "four" results in "34"
let multiplication = three * four; // Multiplying "three" and "four" results in 12
let division = three / four; // Dividing "three" by "four" results in 0.75
let subtraction = three - four; // Subtracting "four" from "three" results in -1
let lessThan1 = three < four; // Comparing "three" and "four" results in true
let lessThan2 =
  thirty <
  four; /* Comparing "thirty" and "four" results in false, because "thirty" is not less than "four"
    A correction to this would be switching the greater than symbol to less than, so it would be thirty > four, which results in true */

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

// Exercise 3

if (0) {
  console.log("#1: zero is true");
} // The message will not log into the console, because 0 is a falsy value in JavaScript.

if ("0") {
  console.log("#2: zero string is true");
} // The message will log into the console, because "0" is a truthy value in JavaScript.

if (null) {
  console.log("#3: null is true");
} // The message will not log into the console, because null is a falsy value in JavaScript.

if (-1) {
  console.log("#4: negative is true");
} // The message will log into the console, because -1 is a truthy value in JavaScript.

if (1) {
  console.log("#5: positive is true");
} // The message will log into the console, because 1 is a truthy value in JavaScript.

// Exercise 4

let a = 2,
  b = 3;

let result = `The sum of ${a} and ${b} is ${a + b < 10 ? "less than 10" : "greater than 10"}`;
console.log(result);
// The result will be "The sum of 2 and 3 is less than 10", because the sum of a and b is 5, which is less than 10.
// The += operator adds the value to the variable.

// Exercise 5

// Original function declaration
function getGreeting(name) {
  return `Hello, ${name}!`;
}
console.log(getGreeting("World"));
// The result is "Hello, World!", because the function takes a name as an argument and returns the message.

// a) Function expression syntax
const getGreetingExpression = function (name) {
  return `Hello, ${name}!`;
};
console.log(getGreetingExpression("World"));
// The result is "Hello, World!", because the expression function is assigned to the variable and works like the original declaration.

// b) Arrow function syntax
const getGreetingArrow = (name) => `Hello, ${name}!`;
console.log(getGreetingArrow("World"));
// The result is "Hello, World!", because the arrow function is assigned to the variable and works like the original declaration.

// Exercise 6

const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello, ${person.name}. My name is ${this.firstName} ${this.lastName}.`;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? " You killed my father. Prepare to die."
      : " Nice to meet you.",
};

inigo.greeting(westley);
// The result will be " Nice to meet you.", because the getCatchPhrase method checks 5 fingers for Westley and returns "Nice to meet you."
inigo.greeting(rugen);
// The result will be "You killed my father. Prepare to die.", because the getCatchPhrase method checks 6 fingers for Count Rugen and returns "You killed my father. Prepare to die."

// Exercise 7

const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}.`);
  },
  fullTime() {
    console.log(`Fulltime score is ${this.score}.`);
  },
  foul() {
    this.fouls++;
    return this;
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

console.log(basketballGame.score); // The result will be 9, because the chained methods sum up the score.
console.log(basketballGame.fouls); // The result will be 0, because the chained methods produced no fouls.

// Exercise 8

function printObjectProperties(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

printObjectProperties(sydney);
/* The result will be:
 name: Sydney
 population: 5121000
 state: NSW
 founded: 26 January 1788
 timezone: Australia/Sydney */

const carencro = {
  name: "Carencro",
  population: 14_638,
  state: "LA",
  founded: "Late 19th century",
  timezone: "Central Time Zone",
};

printObjectProperties(carencro);
// The result will be:
// name: Carencro
// population: 14_638
// state: LA
// founded: Late 19th century
// timezone: Central Time Zone

// Exercise 9

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

const moreSports = teamSports;
moreSports.push("Tennis", "Baseball");
moreSports.unshift("Soccer", "Basketball");

let dog2 = dog1;
dog2 = "Bernard";

const cat2 = cat1;
cat2.name = "Whiskers";

console.log(teamSports, dog1, cat1);
/* The teamSports array pushed "Tennis" and "Baseball" to the end of the array and unshifted "Soccer" and "Basketball" to the beginning of the array.
The dog1 variable is a string that functions as a primitive data type and creates a copy of the value. Changing dog2 would not change the dog1 variable.
The cat1 variable is an object that functions as a reference data type and creates a reference to the value. Changing cat2 would change the cat1 variable */

let moreSportsCopy = [...teamSports];
moreSportsCopy.push("Tennis", "Baseball");
moreSportsCopy.unshift("Soccer", "Basketball");

let cat2Copy = {...cat1};
cat2Copy.name = "Snowball";

console.log(teamSports, moreSportsCopy, cat1, cat2Copy);
/* The moreSportsCopy array is a copy of the teamSports array using the spread operator. Changing moreSportsCopy does not change teamSports.
The cat2Copy object is a copy of the cat1 object using the spread operator. Changing cat2Copy does not change cat1. */

// Exercise 10

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
}

const person1 = new Person("George", 24);
const person2 = new Person("Jane", 26);
const person3 = new Person("Alice", 30);

Person.prototype.canDrive = function () {
  return this.age >= 16;
};

console.log(person1.canDrive()); // The result will be true, because person1 is 24 years old.
console.log(person2.canDrive()); // The result will be true, because person2 is 26 years old.
console.log(person3.canDrive()); // The result will be true, because person3 is 30 years old.