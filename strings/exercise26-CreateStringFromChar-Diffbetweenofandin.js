/*
 *Censor Words from Array
 *Create a function that takes a string str and censors any word from a given array arr. The text removed
 * must be replaced by the given character char.
 *
 *Examples
 *censorString("Today is a Wednesday!", ["Today", "a"], "-") ➞ "----- is - Wednesday!"
 *
 *censorString("The cow jumped over the moon.", ["cow", "over"], "*"), "The *** jumped **** the moon.")
 *
 *censorString("Why did the chicken cross the road?", ["Did", "chicken", "road"], "*") ➞ "Why *** the ******* cross the ****?"
 *Notes
 *N/A
 */
function censorString (str, arr, char) {
  const newArr = str.split(' ');
  let newStrArr = [];

  // Please note if you use in, it will retrieve the index
  // Please note how to create a string from a char and with a certain length

  for (let item of newArr) {
    arr.includes(item) ? newStrArr.push(new Array(item.length+1).join(char)) : newStrArr.push(item);
  }

  return newStrArr.join(' ');
}

console.log(censorString('Today is a Wednesday!', ['Today', 'a'], '-'));

// Solution 2
function censorString1 (str, arr, char) {
  const newArr = str.split(' ');
  let newStrArr = [];

  // Please note if you use in, it will retrieve the index
  // Please note how to create a string from a char with char.repeat() method

  for (let item of newArr) {
    arr.includes(item) ? newStrArr.push(char.repeat(item.length)) : newStrArr.push(item);
  }

  return newStrArr.join(' ');
}

console.log(censorString1('Today is a Wednesday!', ['Today', 'a'], '-'));
