// Check if a no is armstrong no or not

function IsArmstrong (number) {
  let sum = 0;
  let origNum = number;
  let numberofDigits = number.toString().length;
  while (number > 0) {
    sum += Math.pow(number % 10, numberofDigits);
    number = Math.floor(number / 10);
  }
  return sum === origNum;
}

console.log(IsArmstrong(153));
console.log(IsArmstrong(370));
console.log(IsArmstrong(1634));
