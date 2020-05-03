/*
 *Two sum
 *Share
 *Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 *You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 *Example:
 *
 *Given nums = [2, 7, 11, 15], target = 9,
 *;
 *Because nums[0] + nums[1] = 2 + 7 = 9,
 *return [0, 1].
 */

const twoSum = function (nums, target) {
  const arr = [];
  if (Array.isArray(nums)) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
        if (i !== j) {
          if (nums[i] + nums[j] === target) {
            arr.push(i, j);

            return arr;
          }
        }
      }
    }
  }
};

const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));
