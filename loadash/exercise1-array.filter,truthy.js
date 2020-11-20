/*
 * https://edabit.com/challenge/M6fbYyBkzJXMAu39G
 * Learn Lodash (2): Compact
 * According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 *   Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
 *
 *   Examples
 * compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
 * Notes
 * This is part one of my series "Lets learn lodash" and is based on the lodash function _.compact.
 *
 *   After discovering how helpful the lodash library is, my goal over the next few months is to gain a keen understanding of the functions it can provide. The best way to understand what they do is to write them myself.
 *
 *   Some are much more difficult than others but I'd like to add cover as many of them as I can so that I can get a good understanding of what the library provides. You can view the other challenges under the published section of my profile.
 */

// Solution1- using array.map- truthy
const compact = arr => {
  const result = [];
  // eslint-disable-next-line array-callback-return
  arr.map(item => {
    if (item) {
      result.push(item);
    }
  });

  return result;
};
console.log(compact([0, 1, false, 2, '', 3]));


// Solution2 using Array.filte
const compact1 = (arr) => arr.filter(item => item);
console.log(compact1([0, 1, false, 2, '', 3]));
