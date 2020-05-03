// *Is Johnny Making Progress?
// *To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
// *
// *Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
// *
// *Examples
// *ProgressDays([3, 4, 1, 2]) ➞ 2
// *// There are two progress days, (3->4) and (1->2)
// *
// *ProgressDays([10, 11, 12, 9, 10]) ➞ 3
// *
// *ProgressDays([6, 5, 4, 3, 2, 9]) ➞ 1
// *
// *ProgressDays([9, 9])  ➞ 0
// *Notes
// *Running the same number of miles as last week does not count as a progress day.

/*
 * Solution 1 *
 * *Function progressDays(runs) {
 * *  Let progress = 0;
 * *  For(let i=0; i< runs.length ; i++){
 * *
 * *      If(runs[i] < runs[i+1]){
 * *          Progress++
 * *      }
 * *  }
 * *  Return progress;
 * *}
 * *
 * *Console.log(progressDays([3, 4, 1, 2]));
 * *Console.log(progressDays([10, 11, 12, 9, 10]));
 * *Console.log(progressDays([6, 5, 4, 3, 2, 9]));
 * *Console.log(progressDays([9,9]));
 */

/*
 *Solution 2 using reduce method- Please note that in reduce method, you can pass index and array to access the array elements
 *function progressDays(runs) {
 * return runs.reduce((acc, cv, index, arr) => (arr[index] < arr[index + 1]) ? acc+1 : acc, 0);
 *}
 *
 *console.log(progressDays([3, 4, 1, 2]));
 *console.log(progressDays([10, 11, 12, 9, 10]));
 *console.log(progressDays([6, 5, 4, 3, 2, 9]));
 *console.log(progressDays([9,9]));
 *
 */

/* Solution 3 using filter method- pleae note that you can pass index and array to access the array elements*/
function progressDays (runs) {
  return runs.filter((item, index, arr) => item < arr[index + 1]).length;
}

console.log(progressDays([3, 4, 1, 2]));
console.log(progressDays([10, 11, 12, 9, 10]));
console.log(progressDays([6, 5, 4, 3, 2, 9]));
console.log(progressDays([9, 9]));
