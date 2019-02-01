/* Name: Calculate average
 * Level: 8kyu
 * Instructions: Write function avg which calculates average of numbers in given list.
 */

const find_average = array => array.reduce((acc, cur) => acc + cur, 0) / array.length;
