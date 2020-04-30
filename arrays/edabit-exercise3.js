/*
Xs and Os, Nobody Knows
Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

    Return a boolean value (true or false).
The string can contain any character.
    When no x and no o are in the string, return true.
    Examples
XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true
// Case insensitive.

XO("zpzpzpp") ➞ true
// Returns true if no x and o.

XO("zzoo") ➞ false
*/

//Solution 1: str.match() --The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
//If the regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.
// // This method returns null if no match is found.
//g modifier: global. All matches (don't return on first match)
// // i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
function XO(str) {
    str = str.toLowerCase();
    let countOfX = str.match(/x/gi) == null ?  0 : str.match(/x/g).length;
    let countOfO= str.match(/o/gi) == null ?  0 : str.match(/o/g).length;

    if(countOfX == countOfO) return true
    else if (countOfX != countOfO) return false

};

console.log(XO('ooxXm'));

//Solution 2:
function XO1(str) {
   let x= str.toLowerCase().split('').filter(x => x === 'x' ).length;
   let y= str.toLowerCase().split('').filter(o=> o === 'o').length;
   return x===y;
};

console.log(XO1('ooxXm'));

//Solution 3:
function XO2(str) {
    let check = str.replace(/[^x]/ig, '');
    console.log('check is', check);


    let check1 = str.replace(/[^x]/ig , "");
    console.log('check1 is', check1);

    return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
}

console.log(XO2('ooxXm'));