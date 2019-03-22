/* Name: Shortest Distance to a Character
 * Level: 6kyu
 * Instructions: Given a string S and a character C, return an array of integers
 * representing the shortest distance from the current character in S to C.
 * 
 * Notes
 * All letters will be lowercase.
 * If the string is empty, return an empty array.
 * If the character is not present, return an empty array.
 * 
 * Examples
 * shortesttoChar("lovecodewars", "e") === [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]
 * shortesttoChar("aaaabbbb", "b") === [4, 3, 2, 1, 0, 0, 0, 0]
 * shortesttoChar("", "b") === []
 * shortesttoChar("abcde", "") === []
 */

function shortesttoChar(S,C) {
  if (!S.includes(C) || C === '')
    return [];
  
  let ans = [];
  
  for (let i = 0, prev = -2 * S.length; i < S.length; i++) {
    if (S[i] === C)
      prev = i;
    ans.push(i - prev);
  }
  for (let i = S.length - 1, prev = 2 * S.length; i >= 0; i--) {
    if (S[i] === C)
      prev = i;
    ans[i] = Math.min(ans[i], prev - i);
  }
    
  return ans;
}
