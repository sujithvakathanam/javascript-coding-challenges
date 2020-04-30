/*
Edabit Experience Points
As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:

Difficulty	Experience Points
Very Easy	5XP
Easy	10XP
Medium	20XP
Hard	40XP
Very Hard	80XP
Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

Examples
getXP({
  "Very Easy" : 89,
  "Easy" : 77,
  "Medium" : 30,
  "Hard" : 4,
  "Very Hard" : 1
}) ➞ "2055XP"


getXP({
  "Very Easy" : 254,
  "Easy" : 32,
  "Medium" : 65,
  "Hard" : 51,
  "Very Hard" : 34
}) ➞ "7650XP"


getXP({
  "Very Easy" : 11,
  "Easy" : 0,
  "Medium" : 2,
  "Hard" : 0,
  "Very Hard" : 27
}) ➞ "2255XP"
Notes
Return values as a string and make sure to add "XP" to the end.

Test.assertEquals(getXP({
  'Very Easy' : 89,
  'Easy' : 77,
  'Medium' : 30,
  'Hard' : 4,
  'Very Hard' : 1
}), '2055XP');
​
Test.assertEquals(getXP({
  'Very Easy' : 254,
  'Easy' : 32,
  'Medium' : 65,
  'Hard' : 51,
  'Very Hard' : 34
}), '7650XP');
​
​
Test.assertEquals(getXP({
  'Very Easy' : 11,
  'Easy' : 0,
  'Medium' : 2,
  'Hard' : 0,
  'Very Hard' : 27
}), '2255XP');
​
// made by @Joshua Señoron

 */

/* Solution1*/
function getXP(obj) {
    let objValues = Object.values(obj);
    let arr = [5,10,20,40,80];
    let sum = objValues.reduce((acc,cv,index) => acc + cv * arr[index], 0);
    return sum + 'XP';

}

console.log(
getXP({
    'Very Easy' : 89,
    'Easy' : 77,
    'Medium' : 30,
    'Hard' : 4,
    'Very Hard' : 1
}));