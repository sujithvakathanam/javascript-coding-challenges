// *Moving to the End
// *Write a function that moves all elements of one type to the end of the array.
// *
// *Examples
// *MoveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// *// Move all the 1s to the end of the array.
// *
// *MoveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]
// *
// *MoveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]
// *Notes
// *Keep the order of the un-moved items the same.*

// Solution 1: long winded
function moveToEnd (arr, el) {
  const newArr = [];
  let count = 0;
  let elCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== el) {
      newArr[count] = arr[i];
      count++;
    } else {
      // eslint-disable-next-line no-plusplus
      elCount++;
    }
  }

  for (let j = 0; j < elCount; j++) {
    newArr.push(el);
  }

  return newArr;
}

console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9));

// Solution 2 using filter and concat
function moveToEnd1 (arr, el) {
  const elArr = arr.filter(item => item === el);
  const noElArr = arr.filter(item => item != el);

  return noElArr.concat(elArr);
}

console.log(moveToEnd1([7, 8, 9, 1, 2, 3, 4], 9));
