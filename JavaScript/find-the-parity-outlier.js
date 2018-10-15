/* Name: Find The Parity Outlier
 * Level: 6kyu
 * Description: You are given an array (which will have a length of at least 3,
 * but could be very large) containing integers. The array is either entirely
 * comprised of odd integers or entirely comprised of even integers except for
 * a single integer N. Write a method that takes the array as an argument and
 * returns this "outlier" N.
 * Examples:
 * [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)
 * [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
 */

/* This function checks if it is an array of even or odd numbers
 * (under the conditions of this specific scenario).
 */
function isEvenArray(arr) {
  let evensCount = 0;
  for (let i = 0; i < 3; i++) {
    if (arr[i] % 2 === 0) {
      evensCount++;
    }
  }
  return (evensCount >= 2);
}

function findOutlier(integers) {
  let isEvenArr = isEvenArray(integers);

  for (let i = 0; i < integers.length; i++) {
    // check if the parity of the entire array is different from the parity of the current integer
    if (isEvenArr !== (integers[i] % 2 === 0)) {
      return integers[i];
    }
  }

  /* if the loop did not return any value we may return here
   * a value that indicates that there is no outlier.
   */
}
