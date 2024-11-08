# assignment 1

this is the first assignment fo Programming hero Level 2 web dev course. in this assignment I solved Eight basic problems of typescript

### problem-1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

```tsx
const sumArray = (nums: number[]): number => {
  const sum: number = nums.reduce((total, current) => total + current, 0);
  return sum;
};

console.log(sumArray([2, 5, 4, 7, 9]));
//output: 27
```

### problem-2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

```tsx
const removeDuplicates = (nums: number[]): number[] => {
  let duplicatesRemoved: number[] = [];
  nums.forEach((num) => {
    if (!duplicatesRemoved.includes(num)) {
      duplicatesRemoved.push(num);
    }
  });
  return duplicatesRemoved;
};

console.log(removeDuplicates([2, 11, 5, 41, 2, 11, 10, 4, 5]));
//output:[ 2, 11, 5, 41, 10, 4 ]
```

### problem 3: Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

```tsx
const countWordOccurrences = (sentence: string, word: string): number => {
  const lowercaseSentence: string = sentence.toLowerCase();
  const lowercaseWord: string = word.toLocaleLowerCase();

  const allWord: string[] = lowercaseSentence.split(" ");

  return allWord.filter((item) => item === lowercaseWord).length;
};

console.log(
  countWordOccurrences(
    "This is my country I love my country that COUnTry is Bangladesh",
    "Country"
  )
);
// output: 3
```

### problem 4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

```tsx
type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (properties: Circle | Rectangle): number => {
  if ("radius" in properties) {
    const circleArea = Math.PI * properties.radius * properties.radius;
    return Math.round(circleArea * 100) / 100;
  } else {
    return properties.height * properties.width;
  }
};

console.log(calculateShapeArea({ shape: "circle", radius: 3 }));
console.log(calculateShapeArea({ shape: "rectangle", height: 3, width: 5 }));

//output: 28.27 15
```
