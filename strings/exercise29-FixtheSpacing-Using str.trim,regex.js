/*
Fix the Spacing
Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.

    Examples
correctSpacing("The film   starts       at      midnight. ")
➞ "The film starts at midnight."

correctSpacing("The     waves were crashing  on the     shore.   ")
➞ "The waves were crashing on the shore."

correctSpacing(" Always look on    the bright   side of  life.")
➞ "Always look on the bright side of life."
Notes
N/A
*/

//Solution 1 -Using str.trim() and regex
function correctSpacing(sentence) {
  let amendedSent = sentence.split(' ');
  let newStr= amendedSent.filter((item) => item.trim()).join(',');
  let reg = new RegExp(/[,]/gi);
  return newStr.replace(reg, ' ');
}

console.log(correctSpacing('The     waves were crashing  on the     shore.   '))
