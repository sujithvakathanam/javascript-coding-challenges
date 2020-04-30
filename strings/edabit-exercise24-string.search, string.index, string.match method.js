/*
Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

    Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1
Notes
Input will be single words.
    Characters in words will be upper or lower case.
"y" is not considered a vowel.
    Input always contains a vowel.
    */

/*Solution1*/
//g refers to search globally , i refers to case insensitive. regex is represented as /[]/
function firstVowel(str) {
    let regex = /[aeiou]/gi;
    return str.search(regex);
}

console.log(firstVowel('STRAWBERRY'))

/*Solution 2*/ //using stirng.match and string.index--please note i here refers to case insensitive matches
function firstVowel1(str) {
    return str.indexOf(str.match(/[aeiou]/i));
}

console.log(firstVowel1('STRAWBERRY'))
