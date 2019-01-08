/* Name: Sum of all the multiples of 3 or 5
 * Level: 7kyu
 * Instructions: Your task is to write function findSum.
 * Upto and including n, this function will return the sum of all multiples of 3 and 5.
 *
 * For example:
 * findSum(5) should return 8 (3 + 5)
 * findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
 */

const findSum = n => [...Array(n).keys()].map(x => ++x).reduce((acc, cur) => !(cur % 3 && cur % 5) ? acc + cur : acc , 0);
