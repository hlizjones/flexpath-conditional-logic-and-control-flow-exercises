import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_19();
  // Modify the line of code ABOVE to run a different exercise
}

export function exercise_01() {
  /* 
   
    Exercise 1
    
    Comparison Operators
    
    1. Create two variables that hold different numbers.
    2. Then, check if one is bigger than the other using the 
       `>` (greater than) operator
    3. Log the result to the console
  
  */
  // CODE IN THE OPEN LINES BELOW
  let a = 10;
  let b = 5;
  console.log(a > b); // true
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_02() {
  /* 
   
    Exercise 2
    
    Comparison Operators: 

    1. Create two variables, one assigned to a number and one
       assigned to a string. Then, log the result of comparing them
       with the `===` (strict equality) operator
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let num = 42;
  let str = "42";
  console.log(num === str); // false
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_03() {
  /* 
   
    Exercise 3
    
    Conditionals: 

    1. Create a variable and store an even or odd number, your choice.
    2. Using the `%` (remainder) operator, write an if-else conditional
       that checks if a number is even. 
       
       If it is even, log "Even" to the console.
       If it is odd, log "Odd" to the console.
    
    3. Modify your initial variable code to assign a different number, 
       this time the opposite type (even or odd) than it was at first. 
       Run your code again and see how the result changes.

  */
  // CODE IN THE OPEN LINES BELOW
  let number = 7;
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4
    
    Logical Operators: 

    1. Create a variable and assign it a number between 10 and 20
    2. Write an if statement, using the >= (greater than or equal to), 
       <= (lesser than or equal to), and && (AND conditional) operators
       to check if this value is between 10 and 20.
       If it is, have the message "Between 10 and 20" be logged to the console.

    3. Modify your initial variable definition to be assigned a number 
      either less than 10 or greater than 20. Then run your conditional code 
      again. This time, nothing should log to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let value = 17;
  if (value >= 10 && value <= 20) {
    console.log("Between 10 and 20");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Logical Operators: 

    1. Create a variable named `color` that is assigned a color name as a string.
    2. Create an if-else conditional statement that checks if the `color`
       variable is either "red" or "blue". 

       If it is, log "Color is red or blue" to the console.
       If it is not, log "Color is not red or blue" to the console

       Reminder: The logical OR operator in JavaScript is `||`.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let color = "green";
  if (color === "red" || color === "blue") {
    console.log("Color is red or blue");
  } else {
    console.log("Color is not red or blue");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_06() {
  /* 
   
    Exercise 6
    
    Logical NOT: 

    1. Create a variable and assign it a Falsy value
    2. Then, using the `!` (NOT conditional) operator, 
       log the result of ![variableName] to the console
    
    Use `!` to check if a value is falsy and log the result
  
  */
  // CODE IN THE OPEN LINES BELOW
  let falsyValue = null;
  console.log(!falsyValue); // true
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    Mathematical Operators: 
    
    Add two numbers and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let sum = 4 + 6;
  console.log(sum); // 10
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_08() {
  /* 
   
    Exercise 8
    
    Mathematical Operators: 
    
    Subtract one number from another and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let difference = 10 - 3;
  console.log(difference); // 7
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Mathematical Operators: 
    
    Multiply two numbers and log the result.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let product = 3 * 4;
  console.log(product); // 12
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_10() {
  /* 
   
    Exercise 10
    
    Mathematical Operators and Conditional Statements: 
    
    Divide one number by another.
    If it is even, log "Result is Even" to the console.
    If it is odd, log "Result is Odd" to the console
  
  */
  // CODE IN THE OPEN LINES BELOW
  let quotient = 20 / 5;
  if (quotient % 2 == 0) {
    console.log("Result is Even");
  } else {
    console.log("Result is Odd");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_11() {
  /* 
   
    Exercise 11
    
    Remainder Operator: 
    
    Use the `%` (remainder) operator to find the remainder of a division and log it.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let remainder = 10 % 4;
  console.log(remainder); // 2
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_12() {
  /* 
   
    Exercise 12
    
    Exponentiation: 
    
    1. Use the `**` (exponentiation) operator to 
       calculate 2 to the power of 3 and log the result.
    2. Then use the operator again to find the value of 11 to the power of 3.5.
       Log the result
  
  */
  // CODE IN THE OPEN LINES BELOW
  let power = 2 ** 3;
  console.log(power); // 8
  console.log(11 ** 3.5);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Increment: 

    1. Create a variable and assign it the number 5.
    2. Increment the variable using the `++` operator, and log the variable.
    3. Then, decrement the variable using the `--` operator twice. 
       Log the variable again.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let count = 5;
  count++;
  console.log(count); // 6
  count--;
  count--;
  console.log(count); // 4
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Assignment Operators: 

    Create a variable named `score` and assign it a value over 21.
    Use the `+=` operator to add 14 to this variable and log the variable.
    Then, use the `-=` to subtract 7 from this variable. Log the variable again.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let score = 28;
  score += 14;
  console.log(score); // 42
  score -= 7;
  console.log(score); // 35
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_15() {
  /* 
   
    Exercise 15
    
    Assignment Operators: 
    

    Create a variable named `savings` and assign it a value over 500

    Use the `*=` operator to multiply the variable by 1.08. 
    Log the variable to the console.

    Then, use the `/=` operator to divide the variable by .5.
    Log the variable to the console again.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let savings = 600;
  savings *= 1.08;
  console.log(savings); // 648
  savings /= 0.5;
  console.log(savings); // 1296 = 2 * 648
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Falsy Values: 
    
    Write a conditional statement to check if an empty string is falsy.
    If it is, log the message "An empty string is falsy" to the console
  
  */
  // CODE IN THE OPEN LINES BELOW
  let emptyString = "";
  if (!emptyString) {
    console.log("An Empty string is falsy");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_17() {
  /* 
   
    Exercise 17
    
    Truthy Values: 
    
    Write a conditional statement to check if a string value of "false" is falsy.
    If it is, log the message "the string is falsy" to the console.
    Otherwise, log the message, "the string is not falsy" to the console.

  
  */
  // CODE IN THE OPEN LINES BELOW
  let nonEmptyString = "false";
  if (!nonEmptyString) {
    console.log("the string is falsy");
  } else {
    console.log("the string is not falsy");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_18() {
  /* 
   
    Exercise 18
    
    Objects: 
    Create an object and assign it to a variable.
    Then create another variable, and assign it the first variable as a value.
    Then, using the `===` operator, check if the first and second varable 
    are strictly equal
  
  */
  // CODE IN THE OPEN LINES BELOW
  let obj1 = { name: "Alice" };
  let obj2 = obj1;
  console.log(obj1 === obj2); // true
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_19() {
  /* 
   
    Exercise 19

    Strict vs. Loose Equality: 
    
    Compare `undefined` and `null` using `==` and `===`.
    Log both results to the console.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_20() {
  /* 
   
    Exercise 20
    Switch Statement: 
    
    Use `switch` to check a color and log the corresponding fruit.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let fruitColor = "red";
  switch (fruitColor) {
    case "red":
      console.log("Apple");
      break;
    case "yellow":
      console.log("Banana");
      break;
    default:
      console.log("Unknown fruit");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_21() {
  /* 
   
    Exercise 21
    
    Nested Conditionals: 
    
    Check if a number is positive, negative, or zero.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numberCheck = -10;
  if (numberCheck > 0) {
    console.log("Positive");
  } else if (numberCheck < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_22() {
  /* 
   
    Exercise 22
    
    Ternary Operator: 
    Use a ternary operator to assign a value based on a condition.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let age = 18;
  let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
  console.log(canVote);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_23() {
  /* 
   
    Exercise 23
    
    Combining Logical Operators: 
    
    Use `&&` and `||` together in a condition.

  
  */
  // CODE IN THE OPEN LINES BELOW
  let isMember = true;
  let ageCheck = 25;
  if (isMember && (ageCheck > 20 || ageCheck < 30)) {
    console.log("Eligible for discount");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_24() {
  /* 
   
    Exercise 24
    
    Using `default` in Switch: Check a day of the week and log if it’s a weekday or weekend.

  
  */
  // CODE IN THE OPEN LINES BELOW
  let day = "Saturday";
  switch (day) {
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
    default:
      console.log("Weekday");
  }
  // CODE IN THE OPEN LINES ABOVE
}
