/* Name: Beginner Series #3 Sum of Numbers
 * Level: 7kyu
 * Instructions: Given two integers a and b, which can be positive or negative,
 * find the sum of all the numbers between including them too and return it.
 * If the two numbers are equal return a or b.
 *
 * Note: a and b are not ordered!
 *
 * Examples
 * GetSum(1, 0) == 1   // 1 + 0 = 1
 * GetSum(1, 2) == 3   // 1 + 2 = 3
 * GetSum(0, 1) == 1   // 0 + 1 = 1
 * GetSum(1, 1) == 1   // 1 Since both are same
 * GetSum(-1, 0) == -1 // -1 + 0 = -1
 * GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
 */

function GetSum(a, b) {
  const a1 = Math.min(a, b);
  const an = Math.max(a, b);
  const n = an - a1 + 1;

  return n * (2*a1 + n-1) / 2;
}
