/* Name: List Filtering
 * Level: 7kyu
 * Description: In this kata you will create a function that takes a list of
 * non-negative integers and strings and returns a new list with the strings filtered out.
 * Examples:
 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */

function filter_list(l) {
  let filteredArr = [];

  for (let node of l) {
    if (typeof(node) === 'number') {
      filteredArr.push(node);
    }
  }

  return filteredArr;
}
