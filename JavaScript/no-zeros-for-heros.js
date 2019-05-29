/* Name: No zeros for heros
 * Level: 8kyu
 * Instructions: Numbers ending with zeros are boring.
 * They might be fun in your world, but not here.
 * Get rid of them. Only the ending ones.
 * 
 * 1450 -> 145
 * 960000 -> 96
 * 1050 -> 105
 * -1050 -> -105
 * Zero alone is fine, don't worry about it. Poor guy anyway
*/

const noBoringZeros = num => (num % 10 === 0 && num !== 0) ? noBoringZeros(num / 10) : num;
