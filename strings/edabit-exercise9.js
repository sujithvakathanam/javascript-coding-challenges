/*
Join Two Portions of a Path
Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

Examples
joinPath("portion1", "portion2") ➞ "portion1/portion2"

joinPath("portion1/", "portion2") ➞ "portion1/portion2"

joinPath("portion1", "/portion2") ➞ "portion1/portion2"

joinPath("portion1/", "/portion2") ➞ "portion1/portion2"
Notes
Try not to solve this challenge using only if-else conditions.
*
* */

/*Solution 1

function joinPath(portion1, portion2) {

 return portion1.endsWith('/') ? (portion2.startsWith('/') ? portion1.replace('/','').concat(portion2) : portion1.concat(portion2)) : (portion2.startsWith('/') ? portion1.concat(portion2) : portion1.concat('/'.concat((portion2))))
}

console.log(joinPath('portion1/','/portion2'));
*/

/*Solution2*/ //--This is the best solution

function joinPath(portion1, portion2) {

 return `${portion1.replace('/','')}/${portion2.replace('/','')}`;
}

console.log(joinPath('portion1/','/portion2'));
