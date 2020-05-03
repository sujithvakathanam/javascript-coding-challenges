// The Sweetest Ice Cream
// Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest icecream.
//
// Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:
//
// Flavours	Sweetness Value
// Plain	0
// Vanilla	5
// ChocolateChip	5
// Strawberry	10
// Chocolate	10
// You'll be given instance properties in the order flavor, numSprinkles.
// Examples
// Ice1 = IceCream("Chocolate", 13)         // value of 23
// Ice2 = IceCream("Vanillla", 0)           // value of 5
// Ice3 = IceCream("Strawberry", 7)        // value of 17
// Ice4 = IceCream("Plain", 18)             // value of 18
// Ice5 = IceCream("ChocolateChip", 3)      // value of 8
//
// SweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23
//
// SweetestIcecream([ice3, ice1]) ➞ 23
//
// SweetestIcecream([ice3, ice5]) ➞ 17
// Notes
// Remember to only return the sweetness value.
//
// Solution1*/ // check the implementation of map and reduce in below function

function sweetestIcecream (arrObjects) {
  /*
   * Let sweetestValue = 0;
   * arrObjects.map(item=> item.getSweetnessValue() > sweetestValue ? (sweetestValue = item.getSweetnessValue()) : sweetestValue);
   */
  return arrObjects.reduce((acc, cv) => (acc > cv.getSweetnessValue() ? acc : acc = cv.getSweetnessValue()), 0);

  // Return sweetestValue;
}

const obj = {
  Plain         : 0,
  Vanilla       : 5,
  ChocolateChip : 5,
  Strawberry    : 10,
  Chocolate     : 10
};

class IceCream {
  constructor (flavour, numSprinkles) {
    this.flavour = flavour;
    this.numSprinkles = numSprinkles;
  }

  getSweetnessValue () {
    return obj[this.flavour] + this.numSprinkles;
  }
}

ice1 = new IceCream('Chocolate', 13); // Value of 23
ice2 = new IceCream('Vanilla', 0); // Value of 5
ice3 = new IceCream('Strawberry', 7); // Value of 17
ice4 = new IceCream('Plain', 18); // Value of 18
ice5 = new IceCream('ChocolateChip', 3); // Value of 8

console.log(sweetestIcecream([ice3, ice5]));// 17
