// problem 1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
const sumArray = (nums: number[]): number => {
  const sum: number = nums.reduce((total, current) => total + current, 0);
  return sum;
};

console.log(sumArray([2, 5, 4, 7, 9]));
