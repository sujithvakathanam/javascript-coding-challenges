// Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
//
//   [3, 6, 12, 36]
//
// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.
//
//   Examples
// FactorChain([1, 2, 4, 8, 16, 32]) ➞ true
//
// FactorChain([1, 1, 1, 1, 1, 1]) ➞ true
//
// FactorChain([2, 4, 6, 7, 12]) ➞ false
//
// FactorChain([10, 1]) ➞ false
// Notes
// N/A

// Solution1-
function factorChain (arr) {
  let result = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) {
      // eslint-disable-next-line no-return-assign
      return result = false;
    }
  }

  return result;
}

const arr = [1, 2, 4, 8, 16, 32];
console.log(factorChain(arr));

// Solution2-Using Every call back method
const factorChain1 = arr1 => arr1.slice(1).every((num, index) => num % arr1[index] === 0);

const arr1 = [1, 2, 4, 8, 16, 32];
console.log(factorChain1(arr1));
