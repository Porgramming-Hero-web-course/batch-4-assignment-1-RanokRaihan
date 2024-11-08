"use strict";
// problem 2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
const removeDuplicates = (nums) => {
    let duplicatesRemoved = [];
    nums.forEach((num) => {
        if (!duplicatesRemoved.includes(num)) {
            duplicatesRemoved.push(num);
        }
    });
    return duplicatesRemoved;
};
console.log(removeDuplicates([2, 11, 5, 41, 2, 11, 10, 4, 5]));
