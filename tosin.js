const wordList = ["i", "love", "coding", "a", "lot", "everyday", "_."];
const sentenceLength = 3;

// Sort the array of words alphabetically
wordList.sort((a, b) => a.localeCompare(b));

let sentence = "";

for (let i = 0; i < sentenceLength; i++) {
  sentence += wordList[i] + " ";
}

sentence += "everyday .";

console.log(sentence);
