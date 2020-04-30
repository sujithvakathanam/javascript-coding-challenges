/*The Sweetest Ice Cream
Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest icecream.

Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:

Flavours	Sweetness Value
Plain	0
Vanilla	5
ChocolateChip	5
Strawberry	10
Chocolate	10
You'll be given instance properties in the order flavor, numSprinkles.
Examples
ice1 = IceCream("Chocolate", 13)         // value of 23
ice2 = IceCream("Vanillla", 0)           // value of 5
ice3 = IceCream("Strawberry", 7)        // value of 17
ice4 = IceCream("Plain", 18)             // value of 18
ice5 = IceCream("ChocolateChip", 3)      // value of 8

sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23

sweetestIcecream([ice3, ice1]) ➞ 23

sweetestIcecream([ice3, ice5]) ➞ 17
Notes
Remember to only return the sweetness value.
*/
/*Solution1*/ // check the implementation of map and reduce in below function

function sweetestIcecream(arrObjects) {
    //let sweetestValue = 0;
    //arrObjects.map(item=> item.getSweetnessValue() > sweetestValue ? (sweetestValue = item.getSweetnessValue()) : sweetestValue);
    return arrObjects.reduce((acc,cv) => (acc > cv.getSweetnessValue()) ? acc : (acc = cv.getSweetnessValue()),0);

    //return sweetestValue;
}

const obj = {
    'Plain' : 0,
    'Vanilla' :5,
    'ChocolateChip' : 5,
    'Strawberry' : 10,
    'Chocolate' :10
};

class IceCream{
    constructor(flavour, numSprinkles){
        this.flavour = flavour;
        this.numSprinkles = numSprinkles;
    }

    getSweetnessValue (){
        return obj[this.flavour] + this.numSprinkles;
    }
}

ice1 = new IceCream("Chocolate", 13);        // value of 23
ice2 = new IceCream("Vanilla", 0);        // value of 5
ice3 = new IceCream("Strawberry", 7);        // value of 17
ice4 = new IceCream("Plain", 18);        // value of 18
ice5 = new IceCream("ChocolateChip", 3);  // value of 8


console.log(sweetestIcecream([ice3,ice5]))//17