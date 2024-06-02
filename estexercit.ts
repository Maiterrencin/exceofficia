// Define a type for a function that takes two numbers and returns a number
type MathFunc = (a: number, b: number) => number;

// Example implementation of an 'add' function
const add: MathFunc = (a, b) => a + b;

// Example implementation of a 'subtract' function
const subtract: MathFunc = (a, b) => a - b;

// Example implementation of a 'multiply' function
const multiply: MathFunc = (a, b) => a * b;

// Example implementation of a 'divide' function
const divide: MathFunc = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};

// Usage
console.log(`Add: ${add(10, 5)}`); // Add: 15
console.log(`Subtract: ${subtract(10, 5)}`); // Subtract: 5
console.log(`Multiply: ${multiply(10, 5)}`); // Multiply: 50
console.log(`Divide: ${divide(10, 5)}`); // Divide: 2
