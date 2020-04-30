/*
Sort a String by Its Last Character
Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.

Examples
sortByLast("herb camera dynamic") ➞ "camera herb dynamic"

sortByLast("stab traction artist approach") ➞ "stab approach traction artist"

sortByLast("sample partner autonomy swallow trend") ➞ "trend sample partner swallow autonomy"
Notes
Tests consist of lowercase alphabetic characters (a-z) and spaces.
If two words have the same last character, sort by the order they originally appeared.
 */

//please note the str.charCodeAt()
function sortByLast(str) {
        return strArr = str.split(' ').sort((a,b) => (a.charCodeAt(a.length-1)) - (b.charCodeAt(b.length-1))).join(' ');

}
console.log(sortByLast("stab traction artist approach"));