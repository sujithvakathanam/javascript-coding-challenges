/*
Is the Number Symmetrical?
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

Examples
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true
Notes
N/A
 */

/*
function isSymmetrical(num) {
    if(num.toString().length %2 !== 0){
        return false;
    }

    let middleDigit = num.toString().length / 2;

    let firstHalf = num.toString().split('').slice(0,middleDigit);
    let secondHalf = num.toString().split('').slice(middleDigit);
    return firstHalf.join('') == secondHalf.reverse().join('');
}

console.log(isSymmetrical(7227))
*/

function firstVowel(str) {

   let regex = /[aeiou]/gi;
   return str.search(regex);

}

console.log(firstVowel("STRAWBERRY"))