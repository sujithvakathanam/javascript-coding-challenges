/*
Clear the Fog
Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".

Examples
clearFog("sky") ➞ "It's a clear day!"

clearFog("fogfogfffoooofftreesggfoogfog") ➞ "trees"

clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog") ➞ "birdsandthebees"
Notes
There won't be any fog inside of any of the actual words (won't include the letters f, o or g).
Hidden words are always in lowercase.
 */

// Please note regex is expressed as /[]/g where g represents global search

function clearFog(str) {
  return str.replace(/[fog]/g,'').length === str.length ? `It's a clear day!` : str.replace(/[fog]/g,'');
}

console.log(clearFog("fogfogfffoooofftreesggfoogfog"));
