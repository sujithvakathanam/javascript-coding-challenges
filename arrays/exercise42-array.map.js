/*
 * https://edabit.com/challenge/4QZqtGxiqJbzkNesj
 * Zip It, If You Can?
 *   Given an array of women and an array of men, either:
 *
 * Return "sizes don't match" if the two arrays have different sizes.
 *   If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
 *   Examples
 * zipIt(["Elise", "Mary"], ["John", "Rick"])
 *  ➞ [["Elise", "John"], ["Mary", "Rick"]]
 *
 * zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
 *  ➞ "sizes don't match"
 *
 * zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
 *  ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]
 * Notes
 * N/A
 */

function zipIt (women, men) {
  if (women.length !== men.length) {
    return 'sizes don\'t match';
  }
  const newArray = [];
  // eslint-disable-next-line array-callback-return
  women.map((item, index) => {
    const temp = [item, men[index]];
    newArray.push(temp);
  });

  return newArray;
}

console.log(zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh', 'Tim']));
