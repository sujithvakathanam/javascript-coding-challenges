// Swap 2 variables without a temp
function swapTwoVariables (x, y) {
  x += y;
  y = x - y;
  x -= y;

  console.log(x);
  console.log(y);
}

swapTwoVariables(30, 20);

// Write a program to check if two strings are anagrams
function IsAnagram (word, secondword) {
  const sortedWord = word.split('').sort((a, b) => a > b);
  const sortedSecondWord = secondword.split('').sort((a, b) => a > b);

  return JSON.stringify(sortedWord) === JSON.stringify(sortedSecondWord);
}
console.log(IsAnagram("anagram", "nagaram"));
