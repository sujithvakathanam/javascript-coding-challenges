/*
Apples and Bananas
Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

Examples
"apples and bananas".vreplace("u") ➞ "upplus und bununus"

"cheese casserole".vreplace("o") ➞ "chooso cossorolo"

"stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"
Notes
Words will be lowercased.
 */


String.prototype.vreplace = function (vowel){
    //Please remember that this keyword is used to access the str
    const vowelArray = ['a','e','i','o','u'];
    const newArray = [];
    this.split('').map(item=> (vowelArray.includes(item)) ? newArray.push(vowel) : newArray.push(item) );
    return newArray.join('');
}
console.log("apples and BAnanas".vreplace("u"));

/*Solution 2*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags
String.prototype.vreplace1 = function(vowel) {
    return this.replace(/[aeiou]/gi, vowel); // please note, g refers to global search and i refers to case insensitive
}
console.log("apples and BAnanas".vreplace("u"));