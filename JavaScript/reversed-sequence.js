/* Name: Reversed sequence
 * Level: 8kyu
 * Instructions: Get the number n (n>0) to return the reversed sequence from n to 1.
 * Example : n=5 >> [5,4,3,2,1]
 */

const reverseSeq = n => Array(n).fill(1).map((_, idx) => n - idx);
