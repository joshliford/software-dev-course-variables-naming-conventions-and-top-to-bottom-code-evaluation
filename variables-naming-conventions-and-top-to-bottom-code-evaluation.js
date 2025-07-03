/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

/* 
Original Code:
let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);
*/

// 1) The program has many variables that are poorly named/unclear. a, b, c, and d are all extremely vague variables and should be renamed.

/* 2) Refactor the code --> New code:
let firstName = "Alice";
let itemCount = 5;
let totalPrice = 20;
let itemSummary = firstName + " bought " + itemCount + " items for $" + totalPrice + ".";
*/

// 3) Enhance the program --> Add at least 2 new variables to improve the codes functionality or clarity
let firstName = "Alice";
let itemCount = 5;
let itemName = "watermelons"; // Added an itemName variable to clarify what kind of item was purchased
let itemDescription = "fruit"; // Added an itemDescription variable to describe the item purchased
let totalPrice = 20;
let itemSummary = firstName + " bought " + itemCount + " " + itemName + " for $" + totalPrice + ".";
console.log(itemSummary);