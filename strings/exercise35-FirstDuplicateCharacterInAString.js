// Describe and code an algorithm that returns the first duplicate character in a string?

function firstDuplicateCharacter (str) {
  const obj = {};
  const firstDuplicate = [];
  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== ' ') {
      if (obj[str[i]] === undefined) {
        obj[str[i]] = true;
      } else {
        firstDuplicate.push(str[i]);
      }
    }
  }

  return firstDuplicate[0];
}
console.log(firstDuplicateCharacter('I am Ia police aaaficer'));
