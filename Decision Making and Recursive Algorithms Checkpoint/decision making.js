//DECISION MAKING (IF-ELSE AND SWITCH):

// 1. Function to determine the ticket price based on age
function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return "Invalid age";
    }
}

// Prompt the user to enter age
let age = prompt("Enter your age:");

// Convert input to number
age = parseInt(age);

// Get ticket price
let price = getTicketPrice(age);

// Display
if (typeof price === "number") {
    console.log(`The ticket price for age ${age} is $${price}.`);
} else {
    console.log(price);
}


// 2. Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}



//RECURSION:

// 1. Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


// 1. Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function isPalindrome(str) {
  // Remove spaces, punctuation, and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Base case: if the string is empty or has only one character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Recursive case: check if the first and last characters match
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // Recursively check the substring without the first and last characters
  return isPalindrome(str.slice(1, -1));
}