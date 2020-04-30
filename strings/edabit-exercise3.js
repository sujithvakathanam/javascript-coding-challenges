/*
Digital Vowel Ban
In this challenge, it's time to ban some impenitent digit!

Your job is to delete the digits of a given number that, within their name written in English, contain a given vowel.

    Given an integer n, and a string ban being the vowel to search, implement a function that returns:

    If the given vowel is not present in the name of any of the digits of n, the same n.
    If n has at least a digit that contains the given vowel in its name, the new integer obtained after the elimination of banned digits (as a natural number without leading zeros).
If all digits of n are banned, a string "Banned Number".
    Examples
digitalVowelBan(143, "o") ➞ 3
// 1 = "One" contains "o" (banned).
// 4 = "Four" contains "o" (banned).
// 3 = "Three" is safe.

digitalVowelBan(14266330, "e") ➞ 4266
// "One" contains "e" (banned).
// "Four", "Two" and "Six" are safe.
// "Three" and "Zero" contain "e" (banned).

digitalVowelBan(4020, "u") ➞ 20
// "Four" contains "u" (banned).
// Leading zeros are not considered.

digitalVowelBan(586, "i") ➞ "Banned Number"
// All digits ("Five, "Eight", "Six") contain "i".
Notes
Every given number will be a positive integer greater than 0.

*/

//Solution 1- please note '4' + '2' = 42
// reduce method will convert array of String  to numbers, eg {'4','2'] =>42
const obj = {
    "0": "zero",
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine"
}

function digitalVowelBan(n, ban) {
    console.log('4' + '2');
    let newArr = [];
    let bannedArr = [];

    [...String(n)].map(x=> {
        !obj[x].includes(ban) ? newArr.push(x) : bannedArr.push(x)
    });
    console.log(newArr);
    if (newArr.length  === 0){
        return 'Banned';
    } else
    {
        return newArr.reduce( (acc,cv) => acc + cv);
    }
}

console.log(digitalVowelBan(4266,"o"));