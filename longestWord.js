// Longest word challenge
// Objective: Find the longest word in a string

function findLongestWord1(string) {
  const words = string.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

function findLongestWord(string) {
  return string.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });
}

module.exports = findLongestWord;
