// https://edabit.com/challenge/mQunDaXMdXcC9r9xH
// Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.
//
//   Examples
// reverseWords(" the sky is blue") ➞ "blue is sky the"
//
// reverseWords("hello   world!  ") ➞ "world! hello"
//
// reverseWords("a good example") ➞ "example good a"
// Notes
// A word is defined as a sequence of non-space characters.
//   The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
//   You need to reduce multiple spaces between two words to a single space in the reversed string.
//   Try to solve this in linear time.

function reverseWords(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseWords(" the sky is blue"))
