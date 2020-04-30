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
 */

/*Solution 1 */

function joinPath(portion1, portion2) {
    console.log(portion1.startsWith('/'))


}

joinPath("/portion1", "portion2");