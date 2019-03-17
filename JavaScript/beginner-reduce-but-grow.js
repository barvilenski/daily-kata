/* Name: Beginner - Reduce but Grow
 * Level: 8kyu
 * Instructions: Given a non-empty array of integers, return the result of
 * multiplying the values together in order.
 * Example:
 * [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

const grow = x => x.reduce((acc, cur) => acc * cur, 1);