/*
        //Repeating Letters
        //Create a function that takes a string and returns a string in which each character is repeated once.

        //Examples
        //DoubleChar("String") ➞ "SSttrriinngg"

        //DoubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

        //DoubleChar("1234!_ ") ➞ "11223344!!__  "
        //Notes
        //All test cases contain valid strings.Don't worry about spaces, special characters or numbers. They're all considered valid characters.

 */

// Solution 1- Using array.map

function repeatingLetters(str){
  let newStr = [];
  str.split('').map(item=>newStr.push(`${item}${item}`));
  return newStr.join('');
}
console.log(repeatingLetters("String"));
