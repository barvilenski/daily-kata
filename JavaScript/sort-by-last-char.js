/* Name: Sort by Last Char
 * Level: 7kyu
 * Instructions: Given a string of words (x), you need to return an array of the words,
 * sorted alphabetically by the final character in each.
 *
 * If two words have the same last letter, they returned array should show them in the
 * order they appeared in the given string.
 *
 * All inputs will be valid.
 */

const last = words => words.split(' ').sort((a, b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1));
