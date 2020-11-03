/*
 * https://edabit.com/challenge/PYXbvQh9W3c9i72xx
 * Vending Machine
 * Your task is to create a function that simulates a vending machine.
 *
 *   Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.
 *
 *   The coins used for the change are the following: [500, 200, 100, 50, 20, 10]
 *
 * The return value is an object with 2 properties:
 *
 *   product: the product name that the user selected.
 *   change: an array of coins (can be empty, must be sorted in descending order).
 * Examples
 * vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }
 *
 * vendingMachine(products, 500, 0) ➞ "Enter a valid product number"
 *
 * vendingMachine(products, 90, 1) ➞ "Not enough money for this product"
 * Notes
 * The products are fixed and you can find them in the Tests tab.
 *   If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
 *   If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
 *   If there's no change, return an empty array as the change.
 */

//Solution 1- PLEASE CHECK THE WHILE LOOP-INTERESTING LOGIC
function vendingMachine (products, money, productNumber) {
  // eslint-disable-next-line no-shadow
  const product = products.filter(product => product.number === productNumber);

  if (product.length === 0) {
    return 'Enter a valid product number';
  }
  if (product.length === 1) {
    if (product[0].price === money) {
      return {
        product : product[0].name,
        change  : []
      };
    }
    if (product[0].price > money) {
      return 'Not enough money for this product';
    }
    if (product[0].price < money) {
      return {
        product : product[0].name,
        change  : getResult(product[0].price, money)
      };
    }
  }
}

function getResult (price, money) {
  let coins = [500, 200, 100, 50, 20, 10],
    owed = money - price, //400
    // eslint-disable-next-line prefer-const
    change = [];
  coins.forEach(e => {
    while (owed >= e) {
      change.push(e);//200
      owed -= e;
    }
  });

  return change;
}

// Products available
const products = [
  {number : 1, price : 100, name : 'Orange juice'},
  {number : 2, price : 200, name : 'Soda'},
  {number : 3, price : 150, name : 'Chocolate snack'},
  {number : 4, price : 250, name : 'Cookies'},
  {number : 5, price : 180, name : 'Gummy bears'},
  {number : 6, price : 500, name : 'Condoms'},
  {number : 7, price : 120, name : 'Crackers'},
  {number : 8, price : 220, name : 'Potato chips'},
  {number : 9, price : 80, name : 'Small snack'}
];

/*
 * Console.log(vendingMachine(products, 500, 0));
 * Console.log(vendingMachine(products, 90, 1));
 * Console.log(vendingMachine(products, 200, 7));
 */
console.log(vendingMachine(products, 500, 1)); // 400
