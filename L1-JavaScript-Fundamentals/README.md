# M3-L1.JavaScript-Fundamentals

Welcome to the JS Fundamentals Lab! These exercises are designed to test your understanding of JavaScript's core concepts, from type coercion and functions to objects and classes.

---

## 1. Type Coercion

**Concept Introduction**: JavaScript automatically converts values between types during operations. This implicit conversion (type coercion) can lead to unexpected results. Understanding coercion rules is crucial for writing predictable code and avoiding bugs.

**Common Mistakes**:

- Assuming `+` always performs mathematical addition (it concatenates strings)
- Forgetting that `undefined` in arithmetic operations results in `NaN`
- Not knowing that `null` converts to `0` in numeric contexts

**Debugging Tips**:

- Use `typeof` operator to check variable types: `typeof variable`
- Use `Number()` and `String()` functions for explicit conversion
- Test edge cases with `null`, `undefined`, and empty strings

Predict the result of each expression below, then verify your answer by running the code in the browser console.

```javascript
"" + 1 + 0;
true + false;
6 / "3";
"2" * "3";
4 + 5 + "px";
"$" + 4 + 5;
"4" - 2;
"4px" - 2;
"  -9  " + 5;
"  -9  " - 5;
null + 1;
undefined + 1;
" \t \n" - 2;
```

**Expected Outputs**:

```javascript
"" + 1 + 0; // "10"
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9  5"
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2
```

**Bonus:** What is the result of `undefined == null`? What about `undefined === null`? Why?

**Expected Bonus Outputs**:

```javascript
undefined == null; // true (loose equality converts types)
undefined === null; // false (strict equality checks both type and value)
```

---

## 2. String vs. Number Operations

**Concept Introduction**: JavaScript uses different rules for arithmetic vs. comparison operations. The `+` operator performs concatenation when either operand is a string, while `-`, `*`, and `/` attempt to convert strings to numbers. Comparisons also have their own type coercion rules.

**Common Mistakes**:

- Forgetting that string concatenation has higher precedence than addition
- Assuming all string-to-number conversions succeed (invalid strings become `NaN`)
- Not understanding how comparison operators handle different types

**Debugging Tips**:

- Use `parseInt()` and `parseFloat()` for explicit string-to-number conversion
- Check for `NaN` using `isNaN()` function
- Remember that lexical string comparison differs from numeric comparison

The following code block has some unexpected results and a syntax error.

### Your Tasks

1. Fix the syntax error in the `subtraction` variable declaration.
2. Run the code and observe the results.
3. Add comments to explain why `addition` and `lessThan2` produce their specific results.

```javascript
let three = "3";
let four = "4";
let thirty = "30";

// What is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three  four; // Fix this line
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
```

**Expected Outputs**:

```javascript
let addition = three + four; // "34" (string concatenation)
let multiplication = three * four; // 12 (numeric multiplication)
let division = three / four; // 0.75 (numeric division)
let subtraction = three - four; // -1 (numeric subtraction)
let lessThan1 = three < four; // true (numeric comparison)
let lessThan2 = thirty < four; // false (numeric: 30 < 4)
```

**Explanation**:

- `addition` results in "34" because `+` concatenates strings
- `lessThan2` is false because "30" converts to number 30, which is not less than 4

---

## 3. Truthy and Falsy Values

**Concept Introduction**: In JavaScript, every value can be evaluated as either "truthy" or "falsy" in boolean contexts. Only six values are falsy: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`. All other values, including empty objects and arrays, are truthy.

**Common Mistakes**:

- Assuming `"0"` or `"false"` are falsy (they're truthy strings)
- Forgetting that empty objects `{}` and arrays `[]` are truthy
- Confusing falsy values with the boolean `false`

**Debugging Tips**:

- Use `Boolean()` function to test truthiness: `Boolean(value)`
- Use `!!value` as a quick way to convert to boolean
- Remember that only the six specific falsy values evaluate to false

For each `if` statement below, predict whether the message will be logged to the console. Explain your reasoning for each.

```javascript
if (0) {
  console.log("#1: zero is true");
}

if ("0") {
  console.log("#2: zero string is true");
}

if (null) {
  console.log("#3: null is true");
}

if (-1) {
  console.log("#4: negative is true");
}

if (1) {
  console.log("#5: positive is true");
}
```

**Expected Outputs**:

```javascript
// #1: zero is true - NOT logged (0 is falsy)
// #2: zero string is true - LOGGED ("0" is truthy)
// #3: null is true - NOT logged (null is falsy)
// #4: negative is true - LOGGED (-1 is truthy)
// #5: positive is true - LOGGED (1 is truthy)
```

---

## 4. The Ternary Operator

**Concept Introduction**: The ternary operator (`condition ? valueIfTrue : valueIfFalse`) is a concise alternative to if/else statements. It's particularly useful for conditional assignments and inline expressions. The `+=` operator is a compound assignment operator that adds to a variable and reassigns the result.

**Common Mistakes**:

- Making ternary expressions too complex and hard to read
- Forgetting that ternary expressions return values (unlike if statements)
- Not using parentheses for complex conditions, leading to confusion

**Debugging Tips**:

- Break complex ternary chains into multiple lines for readability
- Use if/else for complex logic with multiple statements
- Test the condition separately if the ternary isn't working as expected

### Your Tasks

1. Rewrite the `if/else` statement below using a single line of code with the ternary operator.
2. In your own words, explain what the `+=` operator does.

````javascript
let a = 2,
  b = 3;
let result = `The sum of ${a} and ${b} is `;

if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

**Expected Output**:
```javascript
// Original result: "The sum of 2 and 3 is less than 10"
````

**Ternary Solution**:

```javascript
let result = `The sum of ${a} and ${b} is ${a + b < 10 ? "less than 10" : "greater than 10"}`;
```

---

## 5. Function Syntax

**Concept Introduction**: JavaScript offers multiple ways to define functions, each with different characteristics. Function declarations are hoisted, function expressions are not, and arrow functions have special `this` binding rules. Understanding these differences is essential for modern JavaScript development.

**Common Mistakes**:

- Confusing function declarations with function expressions
- Not understanding arrow function `this` binding differences
- Forgetting semicolons after function expressions

**Debugging Tips**:

- Check if functions are hoisted (available before declaration)
- Test `this` context in different function types
- Use console.log to verify function execution

The `getGreeting` function is a classic function declaration. Rewrite it in two other common ways:
a) As a **function expression**.
b) As an **arrow function**.

````javascript
// Original function declaration
function getGreeting(name) {
  return `Hello, ${name}!`;
}

// a) Function expression syntax
// const getGreetingExpression = ...

// b) Arrow function syntax
// const getGreetingArrow = ...

**Expected Outputs**:
```javascript
// All three should produce: "Hello, World!"
console.log(getGreeting("World"));        // "Hello, World!"
console.log(getGreetingExpression("World")); // "Hello, World!"
console.log(getGreetingArrow("World"));     // "Hello, World!"
````

**Solutions**:

```javascript
// a) Function expression syntax
const getGreetingExpression = function (name) {
  return `Hello, ${name}!`;
};

// b) Arrow function syntax
const getGreetingArrow = (name) => `Hello, ${name}!`;
```

---

## 6. Objects and `this`

**Concept Introduction**: Objects are JavaScript's fundamental data structures for grouping related data and behavior. The `this` keyword refers to the context in which a function is called, which can vary based on how the method is invoked. Understanding `this` binding is crucial for object-oriented programming in JavaScript.

**Common Mistakes**:

- Losing `this` context when passing methods as callbacks
- Confusing object properties with variables
- Not understanding how arrow functions handle `this` differently

**Debugging Tips**:

- Use `console.log(this)` to check current context
- Remember that method calls determine `this` binding
- Arrow functions inherit `this` from their enclosing scope

This exercise involves completing an object that represents a character from _The Princess Bride_.

### Your Tasks

a) Complete the `inigo` object by adding a `lastName` property.
b) Update the `greeting` method to include the `lastName` in the introduction.
c) Complete the `getCatchPhrase` method. If the `person` object has `numFingers: 6`, it should return his famous catchphrase. Otherwise, it should return a generic greeting.
d) **Bonus:** Rewrite the `getCatchPhrase` method using arrow function syntax and a ternary operator.

```javascript
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
  // a) Add a lastName property
  greeting(person) {
    let greeting = `Hello, ${person.name}. My name is ${this.firstName}.`; // b) Update this greeting
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    // c) Complete this method
    return "Nice to meet you.";
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);
```

---

## 7. Method Chaining

**Concept Introduction**: Method chaining is a programming pattern where multiple methods are called on the same object in a single statement. This is achieved by having each method return `this` (the object itself), allowing subsequent methods to be called on the returned object. This pattern is commonly used in JavaScript libraries and frameworks.

**Common Mistakes**:

- Forgetting to return `this` from methods that should be chainable
- Confusing method chaining with promise chaining (different concepts)
- Not understanding when chaining improves vs. hurts readability

**Debugging Tips**:

- Log `this` inside methods to verify you're returning the correct object
- Break chains into separate lines to identify which method fails
- Remember that only methods returning `this` can be chained

The `basketballGame` object tracks the score of a game.

### Your Tasks

a) Modify each of the scoring methods (`freeThrow`, `basket`, `threePointer`) so that they can be "chained" together. (Hint: what should each method `return`?)
b) Add a `fullTime` method that prints the final score.
c) Add a `fouls` property and a method to increment it. Include the foul count in the `halfTime` and `fullTime` messages.
d) Test your object by chaining all the method calls together in different combinations.

```javascript
const basketballGame = {
  score: 0,
  // c) Add a fouls property
  freeThrow() {
    this.score++;
  },
  basket() {
    this.score += 2;
  },
  threePointer() {
    this.score += 3;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}.`);
  },
  // b) Add a fullTime method
  // c) Add a method to increment fouls
};

// Modify the methods to enable chaining like this:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();
```

---

## 8. Iterating Over Objects

### Your Tasks

a) Write a function that takes an object as an argument and uses a `for...in` loop to access and print each of its properties and values to the console.
b) Test your function using the `sydney` object.
c) Create a new object for a different city and test the function again.

```javascript
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
```

---

## 9. Primitives vs. Reference Types

This exercise explores how JavaScript stores objects and primitives by reference vs. by value.

### Your Tasks

a) Create `moreSports` equal to `teamSports` and add new sports to `moreSports`.
b) Create `dog2` equal to `dog1` and give `dog2` a new value.
c) Create `cat2` equal to `cat1` and change `cat2`'s `name` property.
d) Print the original `teamSports`, `dog1`, and `cat1` variables to the console. Have they changed? Explain why or why not in a comment.
e) Refactor the code for `moreSports` and `cat2` to create _true copies_, so the original variables remain unchanged. (Hint: look up the spread operator `...`).

```javascript
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };
```

---

## 10. Constructor Functions vs. Classes

This exercise compares two ways of creating objects in JavaScript.

### Your Tasks

a) Create two new people using the `Person` constructor function.
b) Rewrite the constructor function as a `class` called `PersonClass`.
c) Create a third person using the `PersonClass`.
d) Add a `canDrive` method to both the constructor function's `prototype` and the class. The method should return `true` if the person's `age` is 16 or older.

```javascript
// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

// Class Syntax
// b) Rewrite the constructor as a class
```

---

## Bonus Challenge

If you have time, test your skills with the **JS Challenger Rush** game: [https://www.jschallenger.com/games/rush](https://www.jschallenger.com/games/rush)

```

```
