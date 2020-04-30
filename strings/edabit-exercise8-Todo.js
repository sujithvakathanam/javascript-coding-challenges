/*Stripping a Sentence Down
Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

Examples
stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"

stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"

stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""
Notes
You may be asked to remove punctuation and spaces.
Return an empty string if every charcter is specified (see example #3).
All tests will be in lowercase.*/

function stripSentence(str, chars) {
 let arrOfStr = str.split('');
 console.log(arrOfStr);
 let arrOfChar = chars.split('').forEach(item=> item.replace( new RegExp("'"),''));
 console.log(arrOfChar);

 let result = [];
 let obj = {};

 /*for(let i=0 ;i<arrOfChar.length; i++){

   if(obj[arrOfChar[i]] !== undefined){
    obj[arrOfChar[i]] = true;
   }

 }*/

 console.log('obj is', obj);
 console.log('result is', result);
 return result.join('');
}

console.log(stripSentence("gone, reduced to atoms", "go, muscat nerd"))