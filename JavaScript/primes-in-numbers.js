/* Name: Primes in numbers
 * Level: 5kyu
 * Instructions: Given a positive number n > 1 find the prime factor decomposition of n.
 * The result will be a string with the following form:
 *  "(p1**n1)(p2**n2)...(pk**nk)"
 *
 * with the p(i) in increasing order and n(i) empty if n(i) is 1.
 * Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
 */

function primeFactors(n) {
  let primeFactors = {};

  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      primeFactors[i] ? primeFactors[i]++ : primeFactors[i] = 1;
      n /= i;
    }
  }

  if (n > 2) {
    primeFactors[n] = 1;
  }
    
  return Object.entries(primeFactors)
               .map(factor => '(' + factor[0] + (factor[1] > 1 ? '**' + factor[1] : '') + ')')
               .join('');
}
