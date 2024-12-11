# React App

I created a simple React app that displays the letter combinations and shows the solution as a tree structure. You can access the app at the following public URL [Live Demo: Letter Combinations App](https://letter-combinations.vercel.app/)


# Letter Combinations

This is a simple JavaScript function that generates all possible letter combinations for a given string of digits (2-9), based on a telephone keypad mapping.
The function includes a recursive backtracking implementation.
There is also a test suite (test.js) using **Mocha** and **Chai**.

### Function

The `letterCombinations` function takes a string of digits as input and returns an array of all possible letter combinations.

#### Example

```javascript
const { letterCombinations } = require("./letterCombinations");

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a", "b", "c"]
```

#### Testing

Prerequisites

- Install Node.js (v14 or later).
- Install dependencies:

```bash
    npm install
```

Run Tests

```bash
    npm test
```
