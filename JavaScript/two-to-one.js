/* Name: Two to One
 * Level: 7kyu
 * Instructions: Take 2 strings s1 and s2 including only letters from ato z.
 * Return a new sorted string, the longest possible, containing distinct letters,
 * each taken only once - coming from s1 or s2.
 *
 * Examples:
 * a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
 * a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

function longest(s1, s2) {
  return s1.concat(s2)
            .split('')
            .filter((elem, idx, self) => idx === self.indexOf(elem))
            .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
            .join('');
}
