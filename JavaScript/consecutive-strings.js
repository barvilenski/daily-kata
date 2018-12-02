/* Name: Consecutive strings
 * Level: 6kyu
 * Instructions: You are given an array strarr of strings and an integer k.
 * Your task is to return the first longest string consisting of k consecutive
 * strings taken in the array.
 *
 * #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 *
 * n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 */

function longestConsec(strArr, count) {
  if (strArr.length == 0 || count <= 0 || strArr.length < count) {
    return '';
  }


  let lens = [];
  for (let i = 0; i < strArr.length - count + 1; i++) {
    lens.push(strArr.slice(i, i + count).join('').length);
  }

  const idx = lens.indexOf(Math.max(...lens));
  return strArr.slice(idx, idx + count).join('');
}
