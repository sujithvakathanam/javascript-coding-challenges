// How to reverse a Number
function reverseANumber (num) {
  return [...String(num)].reverse().join('');
}

console.log(reverseANumber(798));
