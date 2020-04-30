/*
Match the Last Item
Create a function that takes an array of items and checks if the last item matches the rest of the array.

Examples
matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
Notes
The array is always filled with items.
 */

function matchLastItem(arr) {
    const lastItem = arr.pop(); // please note that after the pop, arr is modified...Also, When popping it removed the quotes as well
    console.log(lastItem);
    const combinedItem = arr.join('');// please note join by defaults joins by , seperator..It ignores the quotes at the beginnning and end
    console.log(combinedItem);
    return lastItem === combinedItem;


}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([1, 1, 1, "11"]));
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));