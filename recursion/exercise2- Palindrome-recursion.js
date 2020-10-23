/*
 * https://edabit.com/challenge/K595YtSroZHAAzvhW
 * Recursion: String Palindromes
 * Write a function that recursively determines if a string is a palindrome.
 *
 *   Examples
 * isPalindrome("abcba") ➞ true
 *
 * isPalindrome("b") ➞ true
 *
 * isPalindrome("") ➞ true
 *
 * isPalindrome("ad") ➞ false
 * Notes
 * An empty string counts as a palindrome.
 */

// Solution1 -Using Recursion-string.substring --Please note the termination and return
function isPalindrome (str) {
  // Termination
  if (str.length < 2) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1)); // Abcba => a and a, bcb=> b === b, c=> str.lenght < 1 returns true
    // Please note in str.substring(start, end) --end will not be included
  }

  return false;
}
console.log(isPalindrome('abcba'));
console.log(isPalindrome(''));
console.log(isPalindrome('b'));
console.log(isPalindrome('aecba'));

// Solution2 -using Array.reverse
function isPalindrome1 (str) {
  return [...str].reverse().join('') === str;
}

console.log(isPalindrome1('abcba'));
console.log(isPalindrome1(''));
console.log(isPalindrome1('b'));
console.log(isPalindrome1('aecba'));

// Solution3- Using string.slice-- Please note end will not be included
function isPalindrome3 (str) {
  if (str.length < 2) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome3(str.slice(1, str.length - 1));
  }
  return false;
}

console.log(isPalindrome3('abcba'));
console.log(isPalindrome3(''));
console.log(isPalindrome3('b'));
console.log(isPalindrome3('aecba'));
