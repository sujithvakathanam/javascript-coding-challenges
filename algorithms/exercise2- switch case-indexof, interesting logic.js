// Explosion Intensity
// Given a number, return a string of the word "Boom", which varies in the following ways:
//
//   The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
//   If n is evenly divisible by 5, return the string in ALL CAPS.
//   If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
//   The example below should help clarify these instructions.
//
//   Examples
// BoomIntensity(4) ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
//
// BoomIntensity(1) ➞ "boom"
// // 1 is lower than 2, so we return "boom"
//
// BoomIntensity(5) ➞ "BOOOOOM"
// // There are 5 "o"s and 5 is divisible by 5 (all caps)
//
// BoomIntensity(10) ➞ "BOOOOOOOOOOM!"
// // There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)
// Notes
// A number which is evenly divisible by 2 and 5 will have both effects applied (see example #4).
// "Boom" will always start with a capital "B", except when n is less than 2, then return a minature explosion as "boom".

// Solution1
function boomIntensity (n) {
  let result = null;
  if (n >= 2) {
    const temp = 'o'.repeat(n);
    n % 2 === 0 ? result = `B${temp}m!` : null;
    n % 5 === 0 ? result = `B${temp}m`.toUpperCase() : null;
    n % 2 === 0 && n % 5 === 0 ? result = `b${temp}m!`.toUpperCase() : null;
    n % 2 !== 0 && result === null ? result = `B${temp}m` : null;
  } else {
    result = 'boom';
  }

  return result;
}

console.log(boomIntensity(3));

// Solution 2 -clever logic --Please refer this
const boomIntensity1 = n => {
  const i = [n < 2, !(n % 10), !(n % 5), !(n % 2), true].indexOf(true);
  switch (i) {
    case 0: return 'boom';
    case 1: return `B${'O'.repeat(n)}M!`;
    case 2: return `B${'O'.repeat(n)}M`;
    case 3: return `B${'o'.repeat(n)}m!`;
    case 4: return `B${'o'.repeat(n)}m`;
  }
};

console.log(boomIntensity(3));
