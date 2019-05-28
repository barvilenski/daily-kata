/* Name: Most digits
 * Level: 7kyu
 * Instructions: Find the number with the most digits.
 * If two numbers in the argument array have the same number of digits, return the first one in the array.
 */

const findLongest = array => array.reduce((longest, current) => String(current).match(/\d/g).length > String(longest).match(/\d/g).length ? current : longest ,array[0]);
