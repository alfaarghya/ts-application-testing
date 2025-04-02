//simple sum function
export function sum(a: number, b: number): number {
  return a + b;
};

//simple subtract function
export function subtract(a: number, b: number): number {
  return a - b;
};

//simple multiply function
export function multiply(a: number, b: number): number {
  return a * b;
};

//simple divide function
export function divide(a: number, b: number): number {
  return a / b;
};

//run all function
function main() {
  console.log(sum(10, 5)); //15
  console.log(subtract(10, 5)); //5
  console.log(multiply(10, 5)); //50
  console.log(sum(10, 5)); //15
};

// main();
