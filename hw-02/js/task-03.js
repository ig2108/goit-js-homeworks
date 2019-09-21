'use strict';

const findLongestWord = function(string) {
  const words = string.split(' ');

  let longestWord = words[0];

  for (let word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

let text = 'The quick brown fox jumped over the lazy dog';

console.log(findLongestWord(text));

text = 'Google do a roll';

console.log(findLongestWord(text));

text = 'May the force be with you';

console.log(findLongestWord(text));
