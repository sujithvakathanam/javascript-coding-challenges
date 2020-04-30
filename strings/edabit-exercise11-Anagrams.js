/*
Minimum Removals to Make Two Strings Anagrams
Create a function that returns the smallest number of letter removals so that two strings are anagrams of each other.

Examples
minRemovals("abcde", "cab") ➞ 2
// Remove "d", "e" to make "abc" and "cab".

minRemovals("deafk", "kfeap") ➞ 2
// Remove "d" and "p" from the first and second word, respectively.

minRemovals("acb", "ghi") ➞ 6
// Remove all letters from both words to get "" and "".
Notes
An anagram is any string that can be formed by shuffling the characters of the original string. For example: baedc is an anagram of abcde.
An empty string can be considered an anagram of itself.
Characters won't be used more than once per string.
 */

function minRemovals(str1, str2) {
    const str1Arr = Array.from(new Set(str1.split(''))); // To get unique values from str1
    const str2Arr = Array.from(new Set(str2.split(''))); // To get unique values from str2

    const commonChars = str1Arr.filter(item =>str2Arr.includes(item));

    const unCommonCharsToBeRemoved = str1Arr.concat(str2Arr).filter(item=> !commonChars.includes(item));

    return unCommonCharsToBeRemoved.length;
}

console.log(minRemovals("acb", "ghi"));