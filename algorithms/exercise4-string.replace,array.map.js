// // https://edabit.com/challenge/kvGvWEYtquTqn7K5i
// Choosing a Fuse
// eslint-disable-next-line max-len
/*
 * A fuse melts when a current in an electrical device exceeds the fuse's rating, breaking the circuit and preventing the heat
 * from building up too much (which can cause a fire). The ideal fuse to choose is higher than the device's current output, yet as close as possible to it as well.
 *
 *   Given an array of fuse ratings, and the device's current output, return which of the fuses is the best for the device.
 *
 * Examples
 * ChooseFuse(["3V", "5V", "12V"], "4.5V") ➞ "5V"
 *
 * ChooseFuse(["5V", "14V", "2V"], "5.5V") ➞ "14V"
 *
 * ChooseFuse(["17V", "15V", "12V"], "9V") ➞ "12V"
 * Notes
 * You will be given three possible ratings in voltage.
 *   Fuses may not be in a sorted order.
 *   Assume that there is a valid fuse in every test case
 */

function chooseFuse (fuses, current) {
  numArry = fuses.map(item => Number(item.replace('V', ''))).sort((a, b) => a - b);
  sortedArray = numArry.filter(item => item >= Number(current.replace('V', '')));

  return `${sortedArray[0]}V`;
}

console.log(chooseFuse(['17V', '15V', '12V'], '17V'));
