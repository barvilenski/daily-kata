/* Name: Maximum subarray sum
 * Level: 5kyu
 * Description: The maximum sum subarray problem consists in finding the maximum
 * sum of a contiguous subsequence in an array or list of integers.
 * Easy case is when the list is made up of only positive numbers and the
 * maximum sum is the sum of the whole array. If the list is made up of only
 * negative numbers, return 0 instead. Empty list is considered to have zero
 * greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 * Example: maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // should be 6: [4, -1, 2, 1]
 */

var maxSequence = function(arr) {
  let maxSoFar = 0, maxEndHere = 0;
  for (let node of arr) {
    maxEndHere += node;
    if (maxEndHere < 0) { maxEndHere = 0; }
    else if (maxSoFar < maxEndHere) { maxSoFar = maxEndHere; }
  }
  return maxSoFar;
}
