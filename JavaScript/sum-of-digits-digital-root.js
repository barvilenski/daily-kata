/* Name: Sum of Digits / Digital Root
 * Level: 6kyu
 * Description: In this kata, you must create a digital root function.
 * A digital root is the recursive sum of all the digits in a number. Given n,
 * take the sum of the digits of n. If that value has two digits, continue
 * reducing in this way until a single-digit number is produced. This is only
 * applicable to the natural numbers.
 * Examples:
 * digital_root(16) => 1 + 6 => 7
 * digital_root(942) => 9 + 4 + 2 => 15 ... => 1 + 5 => 6
 * digital_root(132189) => 1 + 3 + 2 + 1 + 8 + 9 => 24 ... => 2 + 4 => 6
 * digital_root(493193) => 4 + 9 + 3 + 1 + 9 + 3 => 29 ... => 2 + 9 => 11 ... => 1 + 1 => 2
 */

function sum_digits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function digital_root(n) {
  const sum = sum_digits(n);
  if (sum < 10) {
    return sum;
  } else {
    return digital_root(sum);
  }
}
