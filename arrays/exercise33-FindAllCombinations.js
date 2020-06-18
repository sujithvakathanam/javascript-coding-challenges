function solution (N) {
  // Write your code in JavaScript (Node.js 8.9.4)
  const findCombinations = string => {
    if (!string || typeof string !== 'string') {
      return 'Not a string';
    } else if (string.length < 2) {
      return string;
    }

    const combinationsArray = [];

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      const remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

      for (const combination of findCombinations(remainingChars)) {
        combinationsArray.push(char + combination);
      }
    }

    return combinationsArray;
  };

  const newArray = findCombinations(N.toString());

  let largestNo = 0;
  newArray.map(item => (parseInt(item, 10) > largestNo ? largestNo = parseInt(item, 10) : null));

  return largestNo;
}
console.log(solution(213));
console.log(solution(553));
