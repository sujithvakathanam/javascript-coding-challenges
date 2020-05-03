// The Frugal Gentleman
// // eslint-disable-next-line max-len
// * *Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
// * *
// * *  Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
// * *
// * *  Examples
// * *ChosenWine([
// * *  { name: "Wine A", price: 8.99 },
// * *  { name: "Wine 32", price: 13.99 },
// * *  { name: "Wine 9", price: 10.99 }
// * *]) ➞ "Wine 9"
// * *
// * *ChosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
// * *
// * *ChosenWine([]) ➞ null
// * *Notes
// * *All wines will be different prices, so there is no confusion in the ordering.
// *

function chosenWine (wines) {
  const sortedWines = wines.sort((a, b) => a.price - b.price);
  console.log(sortedWines);
  if (sortedWines.length == 0) {
    return null;
  } else if (sortedWines.length == 1) {
    return sortedWines[0].name;
  }

  return sortedWines[1].name;
}

const arr = [

  {name : 'Wine A', price : 8.99},

  {name : 'Wine b', price : 1.99},

  {name : 'Wine c', price : 12.99},

  {name : 'Wine b1', price : 15.99},

  {name : 'Wine c1', price : 112.99}

];
console.log(chosenWine(arr));
