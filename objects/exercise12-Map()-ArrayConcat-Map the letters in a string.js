/*
Map the Letters in a String
Given a word, create an object that stores the indexes of each letter in an array.

Make sure the letters are the keys.
Make sure the letters are symbols.
Make sure the indexes are stored in an array and those arrays are values.
Examples
mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
Notes
All strings given will be lowercase.
 */

// Solution1 -Using new Map() - please refer this url https://javascript.info/map-set
function mapLetters(word) {
 let wordArr = word.split('');
 let myMap = new Map();
 wordArr.map((item,index,arr) => {
   if(myMap.get(item) === undefined){
     myMap.set(item, [index])
   } else {
     myMap.set(item, (myMap.get(item).concat([index]))) // Please note here
   }
 })

  let uniqueChar = Array.from(new Set(word));
  let finalObj = {};
  for ( let i=0 ;i < uniqueChar.length ;i++){
      finalObj[uniqueChar[i]] = myMap.get(uniqueChar[i])
    }
  return finalObj;
}
console.log(mapLetters("froggy"))

// Solution 2- Using object- simple solution
function mapLetters1(word) {
  let wordArr = word.split('');
  let finalObj = {};
  for ( let i=0 ;i < wordArr.length ;i++){
    if(finalObj[wordArr[i]] === undefined){
      finalObj[wordArr[i]] = [i];
    } else{
      finalObj[wordArr[i]] = finalObj[wordArr[i]].concat([i]);
    }
  }
   return finalObj;
}
console.log(mapLetters1("froggy"))
