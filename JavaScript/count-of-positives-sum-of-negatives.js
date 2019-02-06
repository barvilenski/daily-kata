/* Name: Count of positives / sum of negatives
 * Level: 8kyu
 * Instructions: Given an array of integers.
 * Return an array, where the first element is the count of positives numbers and
 * the second element is sum of negative numbers.
 *
 * If the input array is empty or null, return an empty array.
 *
 * Example
 * For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should
 * return [10, -65].
 */

function countPositivesSumNegatives(input) {
  let res = [];

  if (input && input.length) {
    const countPositives = input.filter(num => num > 0).length;
    const sumNegatives = input.reduce((sum, num) => sum + Math.min(num, 0), 0);
    res = [countPositives, sumNegatives];
  }

  return res;
}
