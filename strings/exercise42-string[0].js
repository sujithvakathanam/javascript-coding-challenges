/*
 * https://edabit.com/challenge/NWvmFHPQnG4wuuJqt
 * Reverse Titling
 * Your stereotypical titleCase() function in JavaScript might capitalises the first letter of every word in a given sentence, leaving all the other letters as lowercase.
 *
 *   The goal of this challenge, however, is to create a reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!
 *
 *   Examples
 * ReverseTitle("this is a title") ➞ "tHIS iS a tITLE"
 *
 * ReverseTitle("BOLD AND BRASH!") ➞ "bOLD aND bRASH!"
 *
 * ReverseTitle("Elephants dance about bravely in Thailand") ➞ "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND"
 * Notes:
 *   This was originally translated from a Python version of this question. Unfortunately, I forgot to write down the original question's URL, so if you spot it... let me know!
 * For extra credit (not really), convert the given function to a prototype method!
 */

function reverseTitle (s) {
  const result = [];
  // eslint-disable-next-line array-callback-return
  s.split(' ').map((item, index) => {
    result.push(item[0].toLowerCase() + item.slice(1).toUpperCase());
  });

  return result.join(' ');
}

console.log(reverseTitle('this is a title'));
