/* Name: Square(n) Sum
 * Level: 8kyu
 * Instructions: Complete the square sum method so that it squares each number
 * passed into it and then sums the results together.
 *
 * For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.
 */

const squareSum = numbers => numbers.reduce((sum, cur) => sum + cur * cur, 0);
