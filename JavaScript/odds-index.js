/* Name: Odds-Index
 * Level: 7kyu
 * Instructions: You are given an array with several "even" words,
 * one "odd" word, and some numbers mixed in.
 *
 * Determine if any of the numbers in the array is the index of the "odd" word.
 * If so, return true, otherwise false.
 */

const oddBall = arr => arr.includes(arr.indexOf('odd'));
