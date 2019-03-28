/* Name: If you can't sleep, just count sheep!!
 * Level: 8kyu
 * Instructions: Given a non-negative integer, 3 for example, return a string with
 * a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 */

const countSheep = num => Array(num).fill(' sheep...').map((str, idx) => String(idx + 1) + str).join('');
