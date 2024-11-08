"use strict";
// problem 3: Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
const countWordOccurrences = (sentence, word) => {
    const lowercaseSentence = sentence.toLowerCase();
    const lowercaseWord = word.toLocaleLowerCase();
    const allWord = lowercaseSentence.split(" ");
    return allWord.filter((item) => item === lowercaseWord).length;
};
console.log(countWordOccurrences("This is my country I love my country that COUnTry is Bangladesh", "Country"));
