/* Name: Sum Strings as Numbers
 * Level: 4kyu
 * Instructions: Given the string representations of two integers, return the
 * string representation of the sum of those integers.
 * For example:
 * sumStrings('1','2') // => '3'
 * A string representation of an integer will contain no characters besides the
 * ten numerals "0" to "9".
 */

function sumStrings(a,b) {
  let sum = '';

  a = a.replace(/^0+/, '').split('').reverse().join('');
  b = b.replace(/^0+/, '').split('').reverse().join('');

  let digitA, digitB, addition, remainder = 0,
      len = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < len; i++) {
    digitA = i < a.length ? Number(a[i]) : 0;
    digitB = i < b.length ? Number(b[i]) : 0;

    addition = digitA + digitB + remainder;
    sum += addition % 10;
    remainder = addition >= 10 ? 1 : 0;
  }

  sum += remainder > 0 ? remainder : '';

  return sum.split('').reverse().join('');
}
