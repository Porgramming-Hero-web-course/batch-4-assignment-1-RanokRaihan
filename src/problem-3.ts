// problem 3: Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

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
