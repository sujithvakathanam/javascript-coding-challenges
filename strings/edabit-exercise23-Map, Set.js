/*
Find Unique Character Strings
Create a function that returns only strings with unique characters.

Examples
filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
Notes
N/A
 */

function filterUnique(arr) {
    const newArry = [];
    arr.map((item) => new Set(item.split('')).size === item.length ? newArry.push(item) : null);
    return newArry;
}

console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]))