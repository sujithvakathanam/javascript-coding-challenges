/*
 *Changing Mixed Types
 *Create a function that changes all the elements in an array as follows:
 *
 *Add 1 to all even integers, nothing to odd integers.
 *Concatenates "!" to all strings and capitalises them.
 *Changes all boolean values to its opposite.
 *Examples
 *changeTypes(["a", 12, true]) ➞ ["A!", 13, false]
 *
 *changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]
 *
 *changeTypes([false, "false", "true"]) ➞ [true, "false!", "true!"]
 *Notes
 *There won't be any float values.
 *You won't get strings with both numbers and letters in them.
 *Although the task may be easy, try keeping your code as clean and as readable as possible!
 */

function changeTypes (arr) {
  const newArr = [];
  arr.map(item => {
    // eslint-disable-next-line no-negated-condition
    if (!(typeof item === 'number' && item % 2 === 0)) {
      if (typeof item === 'string') {
        newArr.push(`${item[0].toUpperCase() + item.slice(1)}!`);
      } else if (typeof item === 'boolean') {
        newArr.push(!item);
      } else {
        newArr.push(item);
      }
    } else {
      newArr.push(item + 1);
    }
  });

  return newArr;
}

const arr = [13, '13', 12, 'twelve'];
console.log(changeTypes(arr));
