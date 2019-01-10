/* Name: Sum of odd numbers
 * Level: 7kyu
 * Instructions: Given the triangle of consecutive odd numbers:
 *              1
 *           3     5
 *        7     9    11
 *    13    15    17    19
 * 21    23    25    27    29
 * ...
 * Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
 * rowSumOddNumbers(1); // 1
 * rowSumOddNumbers(2); // 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  const start = n * n - (n - 1), end = start + n * 2;
  let sum = 0;
  for (let i = start; i < end; i += 2)
    sum += i;
  return sum;
}
