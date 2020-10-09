/*
 * https://edabit.com/challenge/S7oxczk4Rtu99kaZ8
 * Ping Pong!
 *   A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
 *
 * Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
 *
 * If win equals true, end the list with Pong!.
 * If win equals false, end with Ping! instead.
 *   Examples
 * pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
 *
 * pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
 *
 * pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
 * Notes
 * You will always return the ball (i.e. the Pongs are yours).
 * Player 1 serves the ball and makes Ping!.
 * Return an array of strings.
 */

// Solution 1 - Using string.repeat and logic

function pingPong (arr, win) {
  const str = 'Ping!,Pong!,';
  const newArr = str.repeat(arr.length).split(',');

  newArr.splice(newArr.length - 1, 1);
  win === false ? newArr.splice(newArr.length - 1, 1) : newArr;

  return newArr;
}

console.log(pingPong(['Ping!', 'Ping!'], false));

// Solution 2: using array.map, flat()
function pingPong1 (arr, win) {
  const final = arr.map(e => [e, 'Pong!']).flat(); // Here an array is created with item and pong....Flat() is used to concatetenate all sub arrays
  console.log(final);

  return win ? final : final.slice(0, final.length - 1);
}

console.log(pingPong1(['Ping!', 'Ping!'], false));
