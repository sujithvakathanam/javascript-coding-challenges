/*
Return the Middle Character(s) of a String
Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

    Examples
getMiddle("test") ➞ "es"

getMiddle("testing") ➞ "t"

getMiddle("middle") ➞ "dd"

getMiddle("A") ➞ "A"
Notes
All test cases contain a single word (as a string).*/

//Solution 1:

function getMiddle(str) {
    let substring = '';
    if (str.length %2 ==1){
        let indexAt = (str.length /2) ;
        substring = str.charAt(indexAt);
    } else
    {
        let indexAt = (str.length / 2);
        substring = str.charAt(indexAt-1) + str.charAt(indexAt)  ;
    }
    return substring;

}

console.log(getMiddle('SUBI'));
