/*
 * Burglary Series (01): Calculate Total Losses
 * You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
 *
 *   Examples
 * const stolenItems = {
 *   tv: 30,
 *   skate: 20,
 *   stereo: 50,
 * } ➞ 100
 *
 * const stolenItems = {
 *   painting: 20000,
 * } ➞ 20000
 *
 * const stolenItems = {} ➞ "Lucky you!"
 * Notes
 * The item value is always positive.
 *   This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
 */

function calculateLosses (obj) {
  const sum = Object.values(obj).reduce((acc, cv) => acc + cv, 0);

  return sum === 0 ? 'Lucky you!' : sum;
}

const obj = {
  tv     : 30,
  skate  : 20,
  stereo : 50
};

const obj1 = {

};
console.log(calculateLosses(obj1));
