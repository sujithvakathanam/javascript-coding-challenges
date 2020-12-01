// https://edabit.com/challenge/8ZQmveyijozCKFGTB
// Back and Forth
// In a board game, a player may pick up a card with several left or right facing arrows, with the number of arrows indicating the number of tiles to move. The player should move either left or right, depending on the arrow's direction.
//
// Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.
//
// Worked Example
// CalculateArrowhead([">>", "<<", "<<<"]) ➞ "<<<"
// // >> means to move 2 places right
// // << means to move 2 places left (cancelling out >>)
// // <<< means to move a further 3 places left
// // overall, the movement can be written as <<<
// Examples
// CalculateArrowhead([">>>>", "<", "<", "<"]) ➞ ">"
//
// CalculateArrowhead([">", "<", ">>", "<", "<<<"]) ➞ "<<"
//
// CalculateArrowhead([">>>", "<<<"]) ➞ ""
// Notes
// Return an empty string if all the arrowheads cancel out.

// Solution1 -using Array.filter, String.match, String.repeat
function calculateArrowhead (arr) {
  let countofLeftMove = 0;
  let countofRightMove = 0;
  arr.filter(el => el.includes('<')).map(item => {
    countofLeftMove += item.match(/[<]/g).length;
  });

  arr.filter(el => el.includes('>')).map(item => {
    countofRightMove += item.match(/[>]/g).length;
  });

  if (countofLeftMove === countofRightMove) {
    return '';
  }
  if (countofLeftMove > countofRightMove) {
    return '<'.repeat(countofLeftMove - countofRightMove);
  }

  return '>'.repeat(countofRightMove - countofLeftMove);
}

console.log(calculateArrowhead(['>>>>', '<', '<', '<']));

/*
 * Solution2 -using arr.map, arra.reduce
 *  please note 1 : -1  will increment
 */
function calculateArrowhead1 (arr) {
  const n = [...arr.join('')].map(item => (item === '>' ? 1 : -1)).reduce((a, b) => a + b);

  return n > 0 ? '>'.repeat(n) : '<'.repeat(Math.abs(n));
}

console.log(calculateArrowhead1(['>>>>', '<', '<', '<']));
console.log(calculateArrowhead1(['>', '<', '>>', '<', '<<<']));
console.log(calculateArrowhead1(['>>>', '<<<']));
