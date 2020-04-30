/*Create a Phone Number
Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.

Examples
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"

createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) ➞ "(874) 125-6582"
Notes
N/A*/

function createPhoneNumber(numbers) {

    let code = numbers.join('').slice(0,3);
    let area = numbers.join('').slice(3,6);
    let num = numbers.join('').slice(6);
    return `(${code}) ${area}-${num}`;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

/*Solution 2*/


function createPhoneNumber1(arr) {
   return '(xxx) xxx-xxxx'.replace(/x/g, v => arr.shift()); //g - refers to global search
    // gi refers to global search with case insensitive
   // Javascript array shift() is an inbuilt function that removes the first item from an array and returns that removed item.
}
console.log(createPhoneNumber1([1,2,3,4,5,6,7,8,9,0]));

//eg:
//var str = "Is this all there is?";

// var patt1 = /is/gi;
// this returns Isisis

// var pat = /is/g;
//this returns isis