/*
 * https://edabit.com/challenge/nuXdWHAoHv9y38sn7
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 *     Assume that the following array of drink objects needs to be sorted:
 *
 *     drinks = [
 *       {name: "lemonade", price: 50},
 *       {name: "lime", price: 10}
 *     ]
 * The output of the sorted drinks object will be:
 *
 *     Examples
 * sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 * Notes
 * N/A
 */

// Solution1- using comparator
function sortDrinkByPrice (drinks) {
  return drinks.sort(compare);
}

function compare (a, b) {
  let comparision = 0;
  if (a.price > b.price) {
    comparision = 1;
  }
  if (a.price < b.price) {
    comparision = -1;
  }

  return comparision;
}
const drinks = [
  {name : 'lemonade', price : 50},
  {name : 'lime', price : 10}
];
console.log(sortDrinkByPrice(drinks));

// Solution2 -Using lambda expression
const sortDrinkByPrice1 = (drinks) => drinks.sort((a,b) => a.price - b.price);

console.log(sortDrinkByPrice1(drinks));
